import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import AuthRouter from './auth/auth.routes';
import TaskRouter from './tasks/tasks.routes';
import CategoryRouter from './categories/category.routes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './utils/swagger.json'
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI || 'mongodb').then(() => {
  console.log("Connected to MongoDB.")
});

app.use('/auth', AuthRouter);
app.use('/tasks', TaskRouter);
app.use('/categories', CategoryRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
