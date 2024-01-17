import { Router } from "express";
import CategoryController from "./category.controller";

const CategoryRouter = Router();
const categoryController = new CategoryController();

CategoryRouter.post('/', categoryController.createCategory);
CategoryRouter.get('/:id', categoryController.getCategoryById);
CategoryRouter.get('/user/:id', categoryController.getCategoryByUserId)
CategoryRouter.put('/:id', categoryController.updateCategory);
CategoryRouter.delete('/:id', categoryController.deleteCategory);

export default CategoryRouter;