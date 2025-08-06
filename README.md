# 🎬 Movie Search App

A full-stack movie search web application built with **React**, **Tailwind CSS**, **Node.js**, and **Express.js**, powered by **The Movie Database (TMDB) API**.

---

## 🚀 Features

- 🔍 Search movies by title
- 📄 Paginated results
- ⚡ Fast & responsive UI
- 🛡️ Backend protected with rate limiting
- 🌐 CORS-enabled API for frontend-backend communication

---

## 🛠️ Tech Stack

### Frontend:
- React + Vite
- Tailwind CSS

### Backend:
- Node.js
- Express.js
- Axios
- dotenv
- express-rate-limit

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/movie-search-app.git
cd movie-search-app
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file and add your TMDB API key:

env
Copy
Edit
TMDB_API_KEY=your_tmdb_api_key
Run the backend server:

bash
Copy
Edit
npm run dev
3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
🌍 API Usage
Endpoint: http://localhost:5000/api/search?query=batman&page=1

