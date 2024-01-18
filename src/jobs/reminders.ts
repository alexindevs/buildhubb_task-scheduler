import * as cron from 'node-cron';
import { Document } from 'mongoose';
import Task, { ITaskAndUser } from '../tasks/tasks.model'; // Import the Task model and ITask interface

import nodemailer from 'nodemailer';

cron.schedule('*/10 * * * *', () => {
    console.log('Running reminders job...');
    handleDueTaskNotifications();
});

async function handleDueTaskNotifications() {
    const dueTasks: Array<Document & ITaskAndUser> = await Task.find({
        due_date: {
            $gte: new Date(),
            $lte: new Date(new Date().getTime() + 30 * 60000) // 30 minutes later
        }
    }).populate('user_id');

    if (dueTasks.length === 0) {
        console.log('No due tasks found.');
        return;
    }

    dueTasks.forEach((task: Document & ITaskAndUser) => {
        sendDueTaskNotificationEmail(task.user_id.email, "Alex's Task Due Soon", `Your task "${task.title}" is due soon.`);
    });
}

function sendDueTaskNotificationEmail(to: string, subject: string, text: string) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alexindevs@gmail.com',
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: 'alexindevs@gmail.com',
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
