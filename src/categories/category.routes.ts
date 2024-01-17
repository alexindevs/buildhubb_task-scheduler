import { Router } from "express";
import CategoryController from "./category.controller";

const router = Router();
const categoryController = new CategoryController();

router.post('/', categoryController.createCategory);
router.get('/:id', categoryController.getCategoryById);
router.get('/user/:id', categoryController.getCategoryByUserId)
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

export default router;