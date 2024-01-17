import mongoose from 'mongoose';

const Category = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: false,
    collection: 'categories',
});

export const CategoryModel = mongoose.model('Category', Category);