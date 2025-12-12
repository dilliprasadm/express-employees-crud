express-employees-crud

A simple and clean Node.js + Express + MongoDB CRUD API for managing employee data.
Built with Mongoose, REST API routes, and a modular MVC folder structure.

🚀 Features
Full CRUD operations for Employees
MongoDB Atlas integration using Mongoose
Clean Controller + Routes structure
Environment variables via dotenv
JSON-based API responses
Error handling + status codes
Production-ready structure

🛠️ Tech Stack
Node.js
Express.js
MongoDB (Atlas)
Mongoose ORM
dotenv for environment config
Nodemon for development

📂 Project Structure
express-employees-crud/
│
├── controllers/
│   └── employeeController.js
│
├── models/
│   └── Employee.js
│
├── routes/
│   └── employeeRoutes.js
│
├── server.js
├── package.json
└── .env

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

🙌 Author
Dilli Prasad
Frontend Developer exploring backend vibes 😎

⭐ Show Some Love
If this repo helped you, give it a star ⭐ on GitHub!
