Employee Manager — Express + MongoDB CRUD App

A clean and simple Employee Management System built with
Node.js, Express, MongoDB, Mongoose & EJS frontend.

👉 Live Demo:
🔗 https://employee-manager-48cf.onrender.com/employees/view

✨ Features
Full CRUD operations (Create, Read, Update, Delete)
MongoDB Atlas integration using Mongoose
EJS-based frontend UI with form + table
Modular MVC folder structure
REST API endpoints
Clean controller logic
Error handling + proper status codes
Hosted on Render

🛠️ Tech Stack
Node.js
Express.js
MongoDB (Atlas)
Mongoose
EJS (Frontend)
dotenv
nodemon (dev only)

📂 Project Structure
express-employees-crud/
│
├── backend/
│   ├── controllers/
│   │   └── employeeController.js
│   ├── models/
│   │   └── Employee.js
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── views/
│   │   └── employees.ejs
│   ├── public/
│   │   └── css/style.css
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md

🔧 Installation
Clone the repo:
git clone https://github.com/dilliprasadm/express-employees-crud.git
cd express-employees-crud


Install dependencies:
npm install

Add a .env file:

MONGODB_URI=your_mongo_atlas_url
PORT=3000

▶️ Running the Server
Development mode:
nodemon server.js

Normal mode:
node server.js

🧪 API Endpoints
➤ GET /employees
Fetch all employees.

➤ GET /employees/:id
Fetch a single employee.

➤ POST /employees/add
Create a new employee.
Body example:
{
  "name": "John Doe",
  "email": "john@mail.com",
  "phone": 9876543210,
  "city": "Hyderabad"
}

➤ PUT /employees/:id
Update an employee.

➤ DELETE /employees/:id
Delete an employee.

🛢️ MongoDB Setup
You can connect using MongoDB Atlas:
Create a free cluster
Whitelist your IP
Create DB user
Get connection string
Paste into .env

🖥️ Frontend (EJS View)
Your UI lives at:
👉 /employees/view

This page includes:
Employee Form
Employee Table
Add / Update / Delete functionality
Fetch API integration
Live link again:
🔗 https://employee-manager-48cf.onrender.com/employees/view
☁️ Deployment (Render)

This project is deployed using Render:
Root Directory: express-employees-crud/backend
Build Command: npm install
Start Command: npm start
Environment Vars:
MONGODB_URI

🙌 Author
Dilli Prasad
Frontend Developer exploring backend vibes 😎

⭐ Show Some Love
If this repo helped you, give it a star ⭐ on GitHub!
