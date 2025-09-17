# Magnet Brains - Task Management System

A MERN stack (MongoDB, Express, React, Node.js) based **Task Management System** built for Magnet Brains.  
This project contains both **frontend** (React) and **backend** (Node.js + Express + MongoDB).

---

## 📂 Folder Structure

magnetBrain-task/
│
├── backend/ # Node.js + Express server
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── controllers/ # Business logic
│ ├── middleware/ 
│ ├── public/
│ ├── utils/
│ ├── views/ # Testing the frontend
│ ├── config/ # DB connection & environment setup
│ └── server.js # Main entry point
│
├── frontend/ # React application
│ ├── public/
│ ├── src/ # Components, pages, services, api.js
│ └── package.json

│
└── README.md # Project documentation



## 🚀 Getting Started

### 🔹 Backend Setup (Node.js + Express + MongoDB)

1. Open terminal and navigate to the backend folder:
   cd backend

2. Install dependencies:

npm install


3. Create a .env file inside backend/ and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000
-- I have used MongoDB Compass for local database management.

4. Start the backend server:

npm run dev


The backend will run on http://localhost:5000


### 🔹Frontend Setup (React)

1. Open another terminal and navigate to the frontend folder:
cd frontend


2. Install dependencies:

npm install


3. Start the frontend:

npm start


The React app will run on http://localhost:3000


## Tech Stack

1. Frontend: React, Axios, Tailwind CSS (if used)
2. Backend: Node.js, Express.js
3. Database: MongoDB (using MongoDB Compass for local connection)
4. Other: Mongoose, JWT Authentication, Bcrypt.js

## Author
Developed by Vijayant K Pandey
for the task assignet by Magnet Brains on 15th Sept 2026 @ 16:03 PM