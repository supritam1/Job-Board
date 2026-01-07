# 💼 Job Board – MERN Stack Application

A modern **Job Board web application** built using the **MERN stack**, where users can browse jobs and recruiters can post new opportunities.

🚀 Fully deployed  
🎨 Clean UI with Material UI  
⚙️ Scalable backend with MongoDB  

---

## 🌐 Live Demo

- **Frontend (Vercel):** [https://your-frontend-url.vercel.app ](https://job-board-b7igzjni9-supritam1s-projects.vercel.app/)

---

## ✨ Features

### 👥 Users
- Browse job listings with pagination
- View detailed job information
- See job type, location & deadlines

### 🧑‍💼 Recruiters
- Add new job postings
- Form validation with clear error messages
- Multiple apply options (link / email / phone)

---

## 🛠 Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🎨 Material UI (MUI)
- 🧭 React Router
- 🧠 Redux Toolkit + RTK Query
- 📋 React Hook Form + Yup

### Backend
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB (Atlas)
- 📦 Mongoose

---

## 📁 Project Structure
```bash
Job-Board/
├── backend/                 # Express + MongoDB API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── frontend/                # React (Vite) Client
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── README.md

```
## 🔄 How It Works

1. Frontend fetches jobs using **RTK Query**
2. Backend handles pagination & validation
3. Jobs are stored in **MongoDB Atlas**
4. Deployed using **Render (backend)** and **Vercel (frontend)**

---

## 🚀 Getting Started (Local)

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

---

## 📌 Future Improvements
- 🔐 Admin authentication
- ✏️ Edit / delete jobs
- 🔍 Advanced job filters
- 🌙 Dark mode
---

## 👨‍💻 Author
### **Supritam Mohanty**
- 🎓 MCA Student | 💻 MERN Stack Developer


