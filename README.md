# Career Path Analyzer

A full-stack web application that helps users analyze skill gaps and provides personalized career roadmaps based on their target position and current skills.

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Assumptions](#assumptions)

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 16.0.3
- **Language**: JavaScript/JSX
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios 1.13.2
- **Deployment**: Vercel

### Backend

- **Framework**: Express.js 5.1.0
- **Language**: Node.js
- **Deployment:** Render

### Database/Data

- **Data Storage**: JSON files (skillData.json)
- **External API**: Hacker News API (https://hacker-news.firebaseio.com/v0)

## ✨ Features

1. **Skill Gap Analysis**: Compare user's current skills against job role requirements
2. **Career Roadmap**: Get a structured learning path for target roles
3. **Tech News Feed**: Display top 5 tech news from Hacker News API

## 📂 Project Structure

```
full-stack-developer-assignment – codeAtRandom-ai/
├── backend/
│   ├── src/
│   │   ├── app.js                 # Express app configuration
│   │   ├── server.js              # Server entry point
│   │   ├── data/
│   │   │   └── skillData.json     # Skills data for different roles
│   │   ├── routes/
│   │   │   ├── news.js            # Hacker News API route
│   │   │   ├── roadmap.js         # Career roadmap route
│   │   │   └── skillGap.js        # Skill gap analysis route
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.js          # Root layout with metadata
│   │   │   ├── page.js            # Home page (input form)
│   │   │   ├── globals.css        # Global styles
│   │   │   └── dashboard/
│   │   │       ├── page.jsx       # Dashboard wrapper
│   │   │       ├── Dashboard.jsx  # Main dashboard component
│   │   │       └── _components/
│   │   │           ├── SkillGap.jsx    # Skill gap display
│   │   │           ├── Roadmap.jsx     # Career roadmap display
│   │   │           └── TechNews.jsx    # Tech news feed
│   │   └── public/
│   │       └── assets/
│   ├── next.config.mjs
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── eslint.config.mjs
│   ├── package.json
│   └── node_modules/
│
└── README.md
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**

   ```powershell
   cd backend
   ```
2. **Install dependencies**

   ```powershell
   npm install
   ```
3. **Start the development server**

   ```powershell
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**

   ```powershell
   cd frontend
   ```
2. **Install dependencies**

   ```powershell
   npm install
   ```
3. **Set up environment variables**
   Create a `.env.local` file in the frontend directory:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```
4. **Start the development server**

   ```powershell
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`

## 🌐Live Deployment Links

- **Backend Deployment**: https://full-stack-developer-assignment-k3by.onrender.com
- **Frontend Deployment:** https://full-stack-developer-assignment-cod-beta.vercel.app/

## 📡 API Endpoints

### 1. Skill Gap Analysis

**Endpoint**: `POST /api/skill-gap`

**Request Body**:

```json
{
  "targetRole": "Frontend Developer",
  "currentSkills": ["HTML", "CSS", "JavaScript"]
}
```

**Response** (200 OK):

```json
{
  "targetRole": "Frontend Developer",
  "matchedSkills": ["HTML", "CSS", "JavaScript"],
  "missingSkills": ["React", "TypeScript", "Testing"],
  "recommendation": "Consider learning React, TypeScript, Testing to bridge the skill gap.",
  "learningOrder": ["React", "TypeScript", "Testing"]
}
```

**Error Response** (400/404):

```json
{
  "error": "targetRole and currentSkills are required"
}
```

### 2. Career Roadmap

**Endpoint**: `POST /api/roadmap`

**Request Body**:

```json
{
  "targetRole": "Frontend Developer"
}
```

**Response** (200 OK):

```json
{
  "targetRole": "Frontend Developer",
  "roadmap": [
    "1–2 months: HTML, CSS, JavaScript fundamentals, Git",
    "2 months: React.js, state management, simple projects",
    "1–2 months: advanced React, APIs, deployment, portfolio projects"
  ]
}
```

**Supported Roles**:

- `Frontend Developer`
- `Backend Developer`
- `Data Analyst`

### 3. Tech News

**Endpoint**: `GET /api/news`

**Response** (200 OK):

```json
{
  "count": 5,
  "stories": [
    {
      "id": 12345,
      "title": "News Title",
      "url": "https://example.com",
      "score": 150,
      "time": 1700000000,
      "type": "story",
      "by": "username"
    }
    // ... more stories
  ]
}
```

## 🔐 Environment Variables

### Frontend (`.env.local`)

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 📝 Assumptions

1. **Supported Roles**: The application currently supports only three job roles:

   - Frontend Developer
   - Backend Developer
   - Data Analyst
2. **Skill Data**: Skills data is stored in `backend/src/data/skillData.json`.
3. **External API**: The Hacker News API is called directly from the backend. This is a public API with no authentication required.
4. **No Database**: The application uses JSON files for data storage. For production scale, consider migrating to a proper database (MongoDB, PostgreSQL, etc.).

**Developed by**: Priyansh Saxena
