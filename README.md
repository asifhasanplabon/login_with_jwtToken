# Login System
A simple Login & Registration system built with the MERN stack (MongoDB, Express, React, Node.js) using JSON Web Token (JWT) for authentication.

---

This project is created purely for learning purposes to understand how authentication works in a full-stack application.

---

## 🚀 Features
-✅ User Registration (Signup)
-✅ User Login (Signin)
-✅ Password hashing using bcrypt
-✅ JWT-based authentication
-✅ Protected routes (only accessible after login)
-✅ Landing page after successful login
-✅ Logout functionality
-✅ Simple and clean UI

---

##🛠️ Tech Stack

###Frontend:

-React.js (with Vite)
-Axios
-React Router DOM

###Backend:

-Node.js
-Express.js

###Database:

-MongoDB (Mongoose)

###Authentication:

-JSON Web Token (JWT)
-bcrypt.js

---

##📁 Project Structure

<pre>```mern-jwt-auth/
│
├── backend/
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── auth.routes.js
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── db/
│   │   └── connectDB.js
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── .env
├── .gitignore
└── README.md```</pre>

---

##⚙️ Environment Variables

`Create a .env file in the backend folder:`

-PORT=8080
-MONGO_URI=mongodb://127.0.0.1:27017/login
-JWT_SECRET=your_secret_key

---

## 🧑‍💻 Installation & Setup
### 1️⃣ Clone the repository
- git clone https://github.com/asifhasanplabon/login_with_jwtToken
- cd mern-jwt-auth
### 2️⃣ Setup Backend
- cd backend
-npm install
-npm run dev
### 3️⃣ Setup Frontend
- cd frontend
- npm install
- npm run dev

---
## 🔐 How Authentication Works

-User registers → Password is hashed using bcrypt and stored in MongoDB
-User logs in → Server verifies credentials
-If valid → JWT token is generated and sent to client
-Client stores token (localStorage / cookies)
-Token is sent in headers for protected routes
-Middleware verifies token before granting access


---

## 📌 API Endpoints
### 🔑 Auth Routes
-Method	Endpoint	Description
-POST	/api/register	Register user
-POST	/api/login	Login user
-GET	/api/profile	Protected route


---

## 🖥️ Screens
- Landing Page (before login)
- register Page
- Login Page
- Dashboard (after login)

## ⚠️ Disclaimer

-This project is built for learning purposes only.
-It does not include advanced security practices like:

    -Refresh tokens
    -Rate limiting
    -Production-level validation


---

## 💡 Future Improvements
-Add refresh token system
-Implement role-based access control
-Add email verification
-Use cookies instead of localStorage
-Improve UI/UX


--

##🙌 Author

**Asif Hasan**

Aspiring Full-Stack Developer