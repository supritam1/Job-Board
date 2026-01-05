🚀 Job Board – MERN Full Stack Application

A modern Job Board web application built using the MERN stack, featuring job listing, job details, pagination, and job posting with validation.

This project focuses on clean architecture, real-world data flow, and scalable frontend/backend design.

🌟 Features
👤 For Users

📄 View latest job listings

🔍 Paginated job list (server-side pagination)

🧾 View detailed job information

⏳ See application deadline

📌 Apply via link, email, or phone

🧑‍💼 For Job Posters

➕ Add new job postings

✅ Strong form validation

🚫 Prevent invalid job submissions

🔔 Success & error feedback

🛠 Tech Stack
Frontend

⚛️ React (Vite)

🎨 Material UI (MUI)

🔁 React Router

🧠 Redux Toolkit + RTK Query

📋 React Hook Form

✅ Yup Validation

🌐 Axios

Backend

🟢 Node.js

🚂 Express.js

🍃 MongoDB + Mongoose

🧩 MVC Architecture

🧩 Project Architecture
Frontend
 ├── Pages (JobList, JobDetails, AddJob)
 ├── Components (Layout, JobCard, Loader, Snackbar)
 ├── RTK Query (apiSlice)
 ├── Services (Axios)
 └── Validation (Yup)

Backend
 ├── Routes
 ├── Controllers
 ├── Models
 └── Database

🔄 Data Flow (End-to-End)
User Action
 ↓
React Component
 ↓
React Hook Form
 ↓
Yup Validation
 ↓
Axios / RTK Query
 ↓
Express Controller
 ↓
MongoDB
 ↓
Response → UI Update

📄 Pagination Logic (How it Works)

Frontend controls page number via URL (?page=2)

Backend calculates:

skip = (page - 1) × limit


MongoDB returns only required records

Pagination is fast, scalable, and URL-persistent

🧠 Key Concepts Implemented

🔹 Server-side pagination

🔹 Separation of concerns

🔹 Form validation on frontend & backend

🔹 RTK Query caching & data fetching

🔹 Global loader & snackbar handling

🔹 Clean REST API design

▶️ Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/job-board.git

2️⃣ Setup Backend
cd backend
npm install
npm run dev


Create .env:

MONGO_URI=your_mongodb_url
PORT=5000

3️⃣ Setup Frontend
cd frontend
npm install
npm run dev


Create .env:

VITE_API_URL=http://localhost:5000/api

📸 Screenshots

(Add screenshots here later for extra impact)
Example:

Job List Page

Job Details Page

Add Job Form

🚧 Future Improvements

🔐 Authentication (Admin / Recruiter)

✏️ Edit & Delete Jobs

🔎 Advanced Filters (Location, Type)

♾ Infinite Scroll

🌙 Dark Mode

🙋‍♂️ Author

Supritam Mohanty
🎓 MCA Student
💻 MERN Stack Developer
🎯 Passionate about building real-world applications

⭐ Final Note

This project was built to understand real-world frontend–backend interaction, not just UI.
Every feature is designed with scalability and clarity in mind.

If you found this project helpful, feel free to ⭐ the repo!