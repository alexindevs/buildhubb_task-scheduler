import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  collection: 'users',
  timestamps: false,
});

const User = mongoose.model('User', userSchema);

interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
}

export {IUser};

export default User;