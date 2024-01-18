import TaskService from "./tasks.service";
import { Request, Response } from 'express';

const taskService = new TaskService();

export default class TaskController {
    async createTask(req: Request, res: Response) {
        try {
            const taskBody = req.body;
            const task = await taskService.createTask(taskBody);
            return res.status(201).json(task);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async getTasksByUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tasks = await taskService.getTasksByUser(id);
            return res.status(200).json(tasks);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async getTaskById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const task = await taskService.getTaskById(id);
            return res.status(200).json(task);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async getTasksByCategory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tasks = await taskService.getTasksByCategory(id);
            return res.status(200).json(tasks);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async updateTaskStatus(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const task = await taskService.updateTaskStatus(id, status);
            return res.status(200).json(task);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updates = req.body;
            const task = await taskService.updateTask(id, updates);
            return res.status(200).json(task);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async deleteTask(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const task = await taskService.deleteTask(id);
            return res.status(200).json(task);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
}