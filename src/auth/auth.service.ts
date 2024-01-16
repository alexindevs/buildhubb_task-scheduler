import UserModel from './auth.model';
import bcrypt from 'bcrypt';

export default class AuthService {
async createUser(username: string, email: string, password: string): Promise<typeof UserModel> {
    try {
        const existingUser = await this.findByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        password = hashedPassword;

        const user = new UserModel({ username, email, password });
        await user.save();

        return user;
    } catch (error) {
        throw error;
    }
}

    async findByEmail(email: string): Promise<typeof UserModel> {
        return UserModel.findOne({ email });
    }

    async findById(id: string): Promise<typeof UserModel> {
        return UserModel.findById(id);
    }

async validateUser(email: string, password: string): Promise<typeof UserModel> {
    try {
        const user = await this.findByEmail(email);
        if (!user) {
            throw new Error("User not found");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid password");
        }
        return user;
    } catch (error) {
        throw new Error("Validation failed");
    }
}

    async updateUser( user: Partial<typeof UserModel>): Promise<typeof UserModel> {
        return UserModel.findOneAndUpdate({ _id: user._id }, user, { new: true });
    }

    /**
     * Deletes a user by their ID.
     *
     * @param {string} id - The ID of the user to delete.
     * @return {Promise<typeof UserModel>} - A promise that resolves to the deleted user object.
     */
    async deleteUser(id: string): Promise<typeof UserModel> {
        return UserModel.findByIdAndDelete(id);
    }
}