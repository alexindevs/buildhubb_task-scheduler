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
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
}, {
    timestamps: true,
    collection: 'tasks',
});

const TaskSchema = mongoose.model('Task', Task);

import { IUser } from '../auth/auth.model'
  
    interface ITask {
        _id: string;
        title: string;
        description: string;
        user_id: string;
        category_id: string;
        due_date: string;
        status: string;
        is_recurring: boolean;
        recurrence: {
          frequency: string;
          interval: number;
          end_date: Date | null;
        };
        reminders: Array<{
          date: Date;
          message: string;
        }>;
        createdAt: string;
        updatedAt: string;
      }

  interface ITaskAndUser {
    _id: string;
    title: string;
    description: string;
    user_id: IUser;
    category_id: string;
    due_date: string;
    status: string;
    is_recurring: boolean;
    recurrence: {
      frequency: string;
      interval: number;
      end_date: Date | null;
    };
    reminders: Array<{
      date: Date;
      message: string;
    }>;
    createdAt: string;
    updatedAt: string;
  }

  export {
    ITaskAndUser,
    ITask
  }

export default TaskSchema;