import TaskService from "./tasks.service";
import { Request, Response } from 'express';

export default class TaskController {
    taskService: TaskService;
    constructor() {
        this.taskService = new TaskService();
    }

    async createTask(req: Request, res: Response) {
        try {
            const taskBody = req.body;
            const task = await this.taskService.createTask(taskBody);
            return res.status(201).json(task);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async getTasksByUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tasks = await this.taskService.getTasksByUser(id);
            return res.status(200).json(tasks);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async getTaskById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const task = await this.taskService.getTaskById(id);
            return res.status(200).json(task);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async getTasksByCategory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tasks = await this.taskService.getTasksByCategory(id);
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
            const task = await this.taskService.updateTaskStatus(id, status);
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
            const task = await this.taskService.updateTask(id, updates);
            return res.status(200).json(task);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async deleteTask(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const task = await this.taskService.deleteTask(id);
            return res.status(200).json(task);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
}