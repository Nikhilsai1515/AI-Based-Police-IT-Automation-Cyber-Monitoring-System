# 🚔 Police IT Management System

An AI-powered enterprise-level Police IT Management Dashboard developed using React, Flask, PostgreSQL, JWT Authentication, and HuggingFace Transformers.

This project provides a secure platform for managing police IT operations such as ticket handling, AI-based report summarization, Excel automation, role-based authentication, and dashboard analytics.

---

# 📌 Features

## 🔐 Authentication & Security
- JWT Authentication
- Secure Login System
- Role-Based Access Control (RBAC)
- bcrypt Password Hashing
- Protected Backend APIs

---

## 🎫 Ticket Management System
- Create Tickets
- View All Tickets
- Update Ticket Status
- Delete Tickets
- Search & Filter Tickets
- Real-Time Ticket Analytics

---

## 🤖 AI Report Summarizer
- AI-powered long report summarization
- HuggingFace Transformers Integration
- Supports large text reports
- Intelligent summary generation

---

## 📊 Dashboard Analytics
- Total Tickets Count
- Pending Tickets
- Completed Tickets
- Dynamic Dashboard Statistics

---

## 📂 Excel Automation Module
- Upload Excel Files
- Automated Data Processing
- File Analytics
- Extract Row & Column Information

---

## 👥 Multi-Role User System

### Roles Implemented
- Admin
- Officer
- Analyst
- Viewer

### Access Control

| Feature       | Admin | Officer | Analyst | Viewer |
| Dashboard     | ✅   | ✅    | ✅     | ✅     |
| Create Ticket | ✅   | ✅    | ❌     | ❌     |
| View Tickets  | ✅   | ✅    | ✅     | ✅     |
| AI Summarizer | ✅   | ❌    | ✅     | ❌     |
| Excel Upload  | ✅   | ❌    | ✅     | ❌     |
| Delete Tickets| ✅   | ❌    | ❌     | ❌     |

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM
- React Toastify

---

## Backend
- Flask
- Flask JWT Extended
- SQLAlchemy
- Flask CORS
- bcrypt

---

## Database
- PostgreSQL

---

## AI & Automation
- HuggingFace Transformers
- pandas
- openpyxl

---

# 🏗️ System Architecture

```text
React Frontend
       ↓
Flask REST APIs
       ↓
JWT Authentication
       ↓
PostgreSQL Database
       ↓
AI & Automation Modules
````

---

# 📁 Project Structure

```text
project/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── ai_module/
│   ├── automation/
│   ├── uploads/
│   ├── app.py
│   └── requirements.txt
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/police-it-management-system.git
```

---

## 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 3️⃣ Backend Setup

```bash
cd backend
python -m venv venv
```

Activate venv:

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

---

# 🗄️ Database Setup

## Create PostgreSQL Database

```sql
CREATE DATABASE police_it_system;
```

---

# 🔑 Sample Login Credentials

| Role    | Email                                                 | Password   |
| ------- | ----------------------------------------------------- | ---------- |
| Admin   | [admin@police.gov.in](mailto:admin@police.gov.in)     | admin123   |
| Officer | [officer@police.gov.in](mailto:officer@police.gov.in) | officer123 |
| Analyst | [analyst@police.gov.in](mailto:analyst@police.gov.in) | analyst123 |
| Viewer  | [viewer@police.gov.in](mailto:viewer@police.gov.in)   | viewer123  |

---

# 📸 Project Modules

* Dashboard Analytics
* Ticket Management
* AI Summarizer
* Excel Automation
* Role-Based Authentication
* Secure REST APIs

---

# 🔒 Security Features

* JWT Token Authentication
* Role-Based Authorization
* Secure Password Hashing
* Protected Routes
* Secure API Access

---

# 🚀 Future Enhancements

* Real-Time Notifications
* Cloud Deployment
* OCR Integration
* AI Chatbot
* Advanced Analytics
* Email Alerts
* Audit Logging System

---

# 👨‍💻 Developed By

Nikhilsai

---

# 📄 License

This project is developed for educational, internship, and enterprise learning purposes.

```
```
