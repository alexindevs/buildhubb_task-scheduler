import CategoryService from './category.service';
import { Request, Response } from 'express';

export default class CategoryController {
    categoryService: CategoryService;
    constructor() {
        this.categoryService = new CategoryService();
    }

    async createCategory(req: Request, res: Response) {
       try {
            const { name, color, id } = req.body;
            const category = await this.categoryService.createCategory(name, color, id);
            return res.status(201).json(category);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async getCategoryByUserId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const categories = await this.categoryService.getCategoriesByUser(id);
            return res.status(200).json(categories);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async getCategoryById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const category = await this.categoryService.getCategoryById(id);
            return res.status(200).json(category);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async updateCategory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, color } = req.body;
            const category = await this.categoryService.updateCategory(id, { name, color });
            return res.status(200).json(category);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    async deleteCategory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const category = await this.categoryService.deleteCategory(id);
            return res.status(200).json(category);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
}