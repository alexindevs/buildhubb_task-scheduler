# Task Scheduler App

Task Scheduler App is a Node.js application that allows users to manage scheduled tasks with features like creating, editing, and deleting tasks. Additionally, it supports recurring tasks and reminders to help users stay organized.

## Features

- Create, edit, and delete tasks
- Recurring tasks support
- Reminders for upcoming tasks

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <your-project-name>
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
MONGO_URI=<your-mongodb-uri>
```

Replace `<your-mongodb-uri>` with your MongoDB connection string.

### Running the App

```bash
npm start
```

The app will be accessible at `http://localhost:3000`.

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Create an account or log in if you already have one.
3. Navigate to the task scheduler interface to start managing your tasks.

## API Endpoints

Find the full lists of endpoints here: [API DOCS](https://buildhubb-task-scheduler.onrender.com/api-docs/)

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## Acknowledgments

- [Buildhubb](https://buildhubb.com/) for the opportunity.

Happy scheduling!
