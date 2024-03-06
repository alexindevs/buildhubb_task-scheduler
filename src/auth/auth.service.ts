import UserModel from './auth.model';
import bcrypt from 'bcrypt';

export default class AuthService {
async createUser(username: string, email: string, password: string) {
    try {
        const existingUser = await this.findByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        password = hashedPassword;

        const user = new UserModel({ username, email, password });
        await user.save();

        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

    async findByEmail(email: string) {
        return UserModel.findOne({ email });
    }

    async findById(id: string) {
        return UserModel.findById(id);
    }

async validateUser(email: string, password: string) {
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

    async updateUser( id: string, user: Partial<typeof UserModel>) {
        return UserModel.findOneAndUpdate({ _id: id }, user, { new: true });
    }

    /**
     * Deletes a user by their ID.
     *
     * @param {string} id - The ID of the user to delete.
     * @return {Promise<typeof UserModel>} - A promise that resolves to the deleted user object.
     */
    async deleteUser(id: string) {
        return UserModel.findByIdAndDelete(id);
    }
}