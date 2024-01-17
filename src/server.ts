import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import AuthRouter from './auth/auth.routes';
import TaskRouter from './tasks/tasks.routes';
import CategoryRouter from './categories/category.routes';

import { v4 as uuidv4 } from 'uuid';
import winston from 'winston';

dotenv.config();

const app = express();
const port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI || 'mongodb').then(
  () => {
    console.log("Connected to MongoDB.")
  }
);

app.use('/auth', AuthRouter);
app.use('/tasks', TaskRouter);
app.use('/categories', CategoryRouter);

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});