import AuthService from "./auth.service";
import { Request, Response } from "express";

const authService = new AuthService();

export default class AuthController {

    async createUser(req: Request, res: Response): Promise<any> {
        try {
            const { username, email, password } = req.body;
            const newUser = await authService.createUser(username, email, password);7
            return res.status(201).json(newUser);
        } catch (error: unknown) {
            console.log(error)
            return res.status(500).json(error);
        }
    }

    async findByEmail(req: Request, res: Response): Promise<any> {
        try {
            const { email } = req.body;
            const user = await authService.findByEmail(email);
            return res.status(200).json(user);
        } catch (error: any) {
            return res.status(500).json({error: error.message});
        }
    }


    async findById(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const user = await authService.findById(id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async login(req: Request, res: Response): Promise<any> {
        try {
            const { email, password } = req.body;
            const user = await authService.validateUser(email, password);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async updateUser(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const update = req.body;
            const user = await authService.updateUser(id, update );
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async deleteUser(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const user = await authService.deleteUser(id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}