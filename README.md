# IntelliPrep.AI — AI Powered Mock Interview Platform

IntelliPrep.AI is an AI-powered mock interview platform that helps users practice technical interviews using intelligent question generation, answer evaluation, and performance feedback.

The platform simulates real interview scenarios, evaluates answers using AI, provides performance reports, and supports premium features through an integrated payment system.

---

# Project Overview

IntelliPrep.AI allows users to:

* Register and login securely
* Set up mock interviews based on role and difficulty
* Receive AI-generated interview questions
* Submit answers and get AI-based evaluation
* View performance reports
* Track interview history
* Purchase premium plans using Razorpay
* Improve interview skills through continuous practice

---

# Key Features

## Authentication System

* User Registration
* User Login
* JWT Authentication
* Secure Cookies
* Password Hashing

## AI Interview System

* AI-generated interview questions
* AI-based answer evaluation
* Performance scoring
* Feedback generation
* Interview simulation

## Interview Report System

* Score generation
* Performance feedback
* Interview history tracking
* Result visualization

## 💳 Payment Integration

* Razorpay Payment Gateway
* Premium Plan Access
* Payment Verification
* Payment History Storage

## Interview Management

* Interview setup system
* Timer-based interview session
* Interview history tracking
* Stored performance reports

---

# System Architecture

```
User
  │
  ▼
React Frontend
  │
  ▼
Node.js Backend (Express)
  │
 ├── MongoDB Database
 ├── OpenRouter AI API
 └── Razorpay Payment Gateway
```

---

# Tech Stack

## Frontend

* React.js
* Redux Toolkit
* Tailwind CSS
* Axios
* Firebase

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

## AI Integration

* OpenRouter API
* Large Language Models (LLM)

## Payment Integration

* Razorpay

---

# Project Structure

```
IntelliPrep.AI/
│
├── client/                # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   └── App.jsx
│
├── server/                # Backend (Node.js)
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── index.js
│
├── README.md
└── .gitignore
```

---

# Workflow
                         ┌──────────────────────┐
                         │        USER          │
                         │  (Web Browser)       │
                         └──────────┬───────────┘
                                    │
                                    │ HTTP Requests
                                    ▼
                     ┌──────────────────────────────┐
                     │       FRONTEND (CLIENT)      │
                     │        React + Redux         │
                     │                              │
                     │ Pages:                       │
                     │ • Home.jsx                   │
                     │ • Auth.jsx                   │
                     │ • InterviewPage.jsx          │
                     │ • InterviewReport.jsx        │
                     │ • Pricing.jsx                │
                     │                              │
                     │ Components:                  │
                     │ • Step1SetUp.jsx             │
                     │ • Step2Interview.jsx         │
                     │ • Step3Report.jsx            │
                     │ • Timer.jsx                  │
                     └──────────┬───────────────────┘
                                │
                                │ Axios API Calls
                                ▼
                     ┌──────────────────────────────┐
                     │       BACKEND (SERVER)       │
                     │     Node.js + Express        │
                     │                              │
                     │ Routes:                      │
                     │ • /api/auth                  │
                     │ • /api/user                  │
                     │ • /api/interview             │
                     │ • /api/payment               │
                     └───────┬──────────┬──────────┘
                             │          │
         ┌───────────────────┘          └────────────────────┐
         │                                                   │
         ▼                                                   ▼
┌──────────────────────┐                         ┌──────────────────────┐
│      DATABASE         │                         │      AI SERVICE      │
│      MongoDB          │                         │      OpenRouter      │
│                       │                         │      (LLM API)       │
│ Collections:          │                         │                      │
│ • users               │                         │ Generates Questions  │
│ • interviews          │                         │ Evaluates Answers    │
│ • payments            │                         │ Provides Feedback    │
└──────────┬────────────┘                         └──────────┬───────────┘
           │                                                 │
           │                                                 │
           ▼                                                 ▼
     Save & Fetch                                     AI Response
     User Data                                       (Questions,
     Interview Data                                  Scores,
     Payment Data                                    Feedback)
           │                                                 │
           └──────────────────────┬──────────────────────────┘
                                  │
                                  ▼
                     ┌──────────────────────────────┐
                     │        PAYMENT SYSTEM        │
                     │          Razorpay            │
                     │                              │
                     │ • Create Order               │
                     │ • Process Payment            │
                     │ • Verify Payment             │
                     └──────────────────────────────┘

## User Flow

1. User registers or logs in
2. User sets up interview details
3. Backend sends request to AI
4. AI generates interview questions
5. User answers questions
6. Answers are evaluated by AI
7. Score and feedback generated
8. Results saved to database
9. User views interview report
10. User can purchase premium plan

---

# API Modules

## Authentication API

```
POST /api/auth/register
POST /api/auth/login
GET /api/auth/logout
```

## Interview API

```
POST /api/interview/start
POST /api/interview/submit
GET /api/interview/history
```

## Payment API

```
POST /api/payment/create
POST /api/payment/verify
```

---

# Database Collections

## User Collection

Stores:

* Name
* Email
* Password
* Role
* Created Date

## Interview Collection

Stores:

* Questions
* Answers
* Score
* Feedback
* Interview Date

## Payment Collection

Stores:

* User ID
* Payment ID
* Amount
* Status

---

# Installation Guide

Follow these steps to run the project locally.

---

## 1️ Clone Repository

```
git clone https://github.com/creator1404/IntelliPrep.AI.git

cd IntelliPrep.AI
```

---

## 2️ Install Backend Dependencies

```
cd server

npm install
```

---

## 3️ Install Frontend Dependencies

```
cd ../client

npm install
```

---

## 4️ Setup Environment Variables

Create `.env` file inside **server** folder.

```
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

OPENROUTER_API_KEY=your_openrouter_key

RAZORPAY_KEY_ID=your_key

RAZORPAY_KEY_SECRET=your_secret
```

---

## 5️ Run Backend Server

```
cd server

npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 6️ Run Frontend

```
cd client

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Future Enhancements

* Voice-based interviews
* Video interview simulation
* Resume analysis
* AI-based skill recommendations
* Leaderboard system
* Real-time analytics

---

# License

This project is licensed under the MIT License.

---
