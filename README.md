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
- **Runtime Manager**: Nodemon 3.1.11 (dev)
- **CORS**: cors 2.8.5
- **HTTP Client**: Axios 1.13.2 (for API calls)

### Database/Data
- **Data Storage**: JSON files (skillData.json)
- **External API**: Hacker News API (https://hacker-news.firebaseio.com/v0)

## ✨ Features

1. **Skill Gap Analysis**: Compare user's current skills against job role requirements
2. **Career Roadmap**: Get a structured learning path for target roles
3. **Tech News Feed**: Display top 5 tech news from Hacker News API
4. **Responsive Design**: Works on desktop and mobile devices
5. **Real-time Analysis**: Instant feedback on skill gaps and recommendations

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
│   │   └── utils/
│   │       └── hnClient.js        # Hacker News API utilities
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
   The backend will run on `http://localhost:5000` (or the port specified in your configuration)

4. **For production**
   ```powershell
   npm start
   ```

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

5. **For production build**
   ```powershell
   npm run build
   npm start
   ```

## 📡 API Endpoints

### Base URL
- **Development**: `http://localhost:5000`
- **Production**: `https://your-vercel-deployment.vercel.app`

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

### Backend (`.env` or direct config)
Currently no environment variables required, but you can add:
```
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## 🌐 Deployment

### Vercel Deployment (Recommended)

#### Frontend Deployment
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and select your repository
4. **Project Settings**:
   - Framework: Next.js
   - Root Directory: `./frontend`
5. **Environment Variables**:
   ```
   NEXT_PUBLIC_API_URL=<your-backend-url>
   ```
6. Click "Deploy"

#### Backend Deployment (Render/Railway/Heroku)

**Option 1: Using Render**
1. Push your code to GitHub
2. Go to [Render](https://render.com)
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. **Settings**:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Click "Create Web Service"

**Option 2: Using Railway**
1. Go to [Railway](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. **Settings**:
   - Root Directory: `backend`
   - Start Command: `npm start`
5. Deploy

### Live Deployment Links
After deployment, update the frontend's `NEXT_PUBLIC_API_URL` environment variable in Vercel with your backend URL.

## 📝 Assumptions

1. **Supported Roles**: The application currently supports only three job roles:
   - Frontend Developer
   - Backend Developer
   - Data Analyst

2. **Skill Data**: Skills data is stored in `backend/src/data/skillData.json`. New roles/skills require manual updates to this file.

3. **External API**: The Hacker News API is called directly from the backend. This is a public API with no authentication required.

4. **Client-Side Rendering**: All dashboard components use the "use client" directive for client-side interactivity and API calls.

5. **CORS Enabled**: Backend has CORS enabled to allow cross-origin requests from the frontend during development and production.

6. **No Database**: The application uses JSON files for data storage. For production scale, consider migrating to a proper database (MongoDB, PostgreSQL, etc.).

7. **Mobile Compatibility**: The frontend is responsive and works on mobile devices. All API calls are guarded with proper error handling to prevent crashes on poor network conditions.

8. **Environment Variable Handling**: The frontend gracefully handles missing `NEXT_PUBLIC_API_URL` and falls back to same-origin API calls.

## 🐛 Troubleshooting

### Mobile App Shows "Application Error"
- Ensure `NEXT_PUBLIC_API_URL` is correctly set in Vercel environment variables
- Check Vercel deployment logs: `vercel logs <deployment-url>`
- Open browser console (DevTools) and check for specific error messages

### API Returns 404
- Verify the backend is running and accessible
- Check that the request body format matches the API documentation
- Ensure role names match exactly (case-sensitive)

### CORS Errors
- Backend has CORS enabled by default
- If custom headers are needed, update the `cors` configuration in `backend/src/app.js`

## 📧 Support
For issues or questions, please check the GitHub repository or contact the developer.

---

**Developed by**: Priyansh Saxena  
**Last Updated**: November 2024
