import { Router } from "express";
import TaskController from "./tasks.controller";

const TaskRouter = Router();
const taskController = new TaskController();

TaskRouter.post('/', taskController.createTask);
TaskRouter.get('/user/:id', taskController.getTasksByUser);
TaskRouter.get('/:id', taskController.getTaskById);
TaskRouter.get('/category/:id', taskController.getTasksByCategory);
TaskRouter.put('/:id', taskController.updateTaskStatus);
TaskRouter.put('/:id', taskController.updateTask);
TaskRouter.delete('/:id', taskController.deleteTask);

export default TaskRouter;