# Node.js Task Management API

A RESTful Task Management API built using **Node.js, Express.js, MongoDB, and Mongoose**. This project demonstrates backend development fundamentals, including CRUD operations, database integration, schema validation, and REST API design.

## Features

- Create new tasks
- Retrieve all tasks
- Retrieve a task by ID
- Update existing tasks
- Delete tasks
- MongoDB Atlas integration
- Mongoose schema validation
- Environment variable configuration
- Organized MVC-style project structure
- JSON-based API responses

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB object modeling |
| dotenv | Environment configuration |
| Nodemon | Development server |

## Project Structure

```text
node-backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── health.controller.js
│   │   └── task.controller.js
│   │
│   ├── models/
│   │   └── task.model.js
│   │
│   ├── routes/
│   │   ├── health.routes.js
│   │   └── task.routes.js
│   │
│   └── server.js
│
├── .env
├── .gitignore
└── package.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/nodejs-task-manager-api.git
```

### 2. Navigate to the project directory

```bash
cd nodejs-task-manager-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
```

Replace the MongoDB URI with your own MongoDB Atlas connection string.

### 5. Start the development server

```bash
npm run dev
```

The server will run at:

```text
http://localhost:3000
```

## API Documentation

Base URL:

```text
http://localhost:3000
```

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| GET | `/health` | Check server health |

### Task Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tasks` | Create a task |
| GET | `/api/tasks` | Retrieve all tasks |
| GET | `/api/tasks/:id` | Retrieve a task by ID |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Example Requests

### Create a Task

**POST** `/api/tasks`

Request Body:

```json
{
  "title": "Learn Node.js",
  "description": "Build my first REST API",
  "status": "pending"
}
```

### Update a Task

**PUT** `/api/tasks/:id`

Request Body:

```json
{
  "title": "Master Node.js",
  "status": "completed"
}
```

### Task Status Options

- `pending`
- `in-progress`
- `completed`

## Testing

All API endpoints were tested using **Thunder Client**, a REST API testing extension for Visual Studio Code.

## Database

The application uses MongoDB Atlas for cloud-based data storage and Mongoose for:

- Schema definition
- Data validation
- Database operations
- Automatic timestamps (`createdAt` and `updatedAt`)

## Security

- Environment variables are used for sensitive configuration.
- MongoDB credentials are excluded from version control using `.gitignore`.
- Request data is validated using Mongoose schema rules.

## Author

**Kavin Raj A.**

B.Tech Information Technology Student



---

*Built as a hands-on backend development project to strengthen REST API development, database integration, and server-side programming skills.*
