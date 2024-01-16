import { Router } from "express";
import AuthController from "./auth.controller";

const router = Router();
const authController = new AuthController();

router.post('/create-user', authController.createUser);
router.get('fetch-by-email', authController.findByEmail);
router.get('/fetch-by-id', authController.findById);
router.post('/login', authController.login);
router.put('/update-user', authController.updateUser);
router.delete('/delete-user', authController.deleteUser);

export default router;