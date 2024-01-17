import AuthService from "./auth.service";
import { Request, Response } from "express";

export default class AuthController {
    private authService: AuthService;
    constructor() {
        this.authService = new AuthService();
    }

    async createUser(req: Request, res: Response): Promise<any> {
        try {
            const { username, email, password } = req.body;
            const newUser = await this.authService.createUser(username, email, password);7
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async findByEmail(req: Request, res: Response): Promise<any> {
        try {
            const { email } = req.body;
            const user = await this.authService.findByEmail(email);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }


    async findById(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const user = await this.authService.findById(id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async login(req: Request, res: Response): Promise<any> {
        try {
            const { email, password } = req.body;
            const user = await this.authService.validateUser(email, password);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async updateUser(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const update = req.body;
            const user = await this.authService.updateUser(id, update );
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async deleteUser(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const user = await this.authService.deleteUser(id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}