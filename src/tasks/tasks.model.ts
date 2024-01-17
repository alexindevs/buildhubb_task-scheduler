import mongoose from 'mongoose'

const Task = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    due_date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'overdue'],
        default: 'pending'
    },
    is_recurring: {
        type: Boolean,
        default: false
    },
    recurrence: {
        frequency: {
            type: String,
            enum: ['daily', 'weekly', 'monthly'],
            default: 'daily'
        },
        interval: {
            type: Number,
            default: 1
        },
        end_date: {
            type: Date
        }
    },
    reminders: [
        {
            date: {
                type: Date,
                required: true
            },
            message: {
                type: String,
                required: true
            }
        }
    ],
    notes: {
        type: String
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    attachments: [
        {
            filename: String,
            url: String
        }
    ],
}, {
    timestamps: true,
    collection: 'tasks',
});

const TaskSchema = mongoose.model('Task', Task);

export default TaskSchema;