import * as cron from 'node-cron';
import { Document } from 'mongoose';
import Task, { ITaskAndUser } from '../tasks/tasks.model'; // Import the Task model and ITask interface

import nodemailer from 'nodemailer';

cron.schedule('* * * * *', () => {
    handleDueTaskNotifications();
});

async function handleDueTaskNotifications() {
    const dueTasks: Array<Document & ITaskAndUser> = await Task.find({
        due_date: {
            $gte: new Date(),
            $lte: new Date(new Date().getTime() + 30 * 60000) // 30 minutes later
        }
    }).populate('user_id');

    dueTasks.forEach((task: Document & ITaskAndUser) => {
        sendDueTaskNotificationEmail(task.user_id.email, 'Task Due Soon', `Your task "${task.title}" is due soon.`);
    });
}

function sendDueTaskNotificationEmail(to: string, subject: string, text: string) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to,
        subject,
        text
    };

    // Send email
    transporter.sendMail(mailOptions, (error: any, info: nodemailer.SentMessageInfo) => {
        if (error) {
            console.error('Error sending due task notification email:', error);
        } else {
            console.log('Due task notification email sent:', info.response);
        }
    });
}
