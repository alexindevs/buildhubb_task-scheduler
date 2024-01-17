import Task from "./tasks.model";

export default class TaskService {
    async createTask(task: typeof Task) {
        try {
            const newTask = new Task(task);
            await newTask.save();
            return newTask;
        } catch (error: any) {
            throw error;
        }
    }

    async getTasksByUser(userid: string) {
        try {
            const tasks = await Task.find({ user_id: userid });
            return tasks;
        } catch (error: any) {
            throw error;
        }
    }

    async getTaskById(id: string) {
        try {
            const task = await Task.findById(id);
            return task;
        } catch (error: any) {
            throw error;
        }
    }

    async getTasksByCategory(categoryid: string) {
        try {
            const tasks = await Task.find({ category_id: categoryid });
            return tasks;
        } catch (error: any) {
            throw error;
        }
    }
    
    async updateTaskStatus(id: string, status: boolean) {
        try {
            const task = await Task.findOneAndUpdate({ _id: id }, { status }, { new: true });
            return task;
        } catch (error: any) {
            throw error;
        }
    }

    async updateTask(id: string, updates: object) {
        try {
            const task = await Task.findOneAndUpdate({ _id: id }, updates, { new: true });
            return task;
        } catch (error: any) {
            throw error;
        }
    }

    async deleteTask(id: string) {
        try {
            const task = await Task.findByIdAndDelete(id);
            return task;
        } catch (error: any) {
            throw error;
        }
    }
    
}