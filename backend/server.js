const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const axios = require("axios");

// Load environment variables
dotenv.config();

// Init express
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60, // limit each IP to 60 requests/min
  message: "Too many requests, please try again later.",
});
app.use(limiter);

// Search route for TMDB
app.get("/api/search", async (req, res) => {
  const { query, page = 1 } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required." });
  }

  try {
    const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query,
        page,
      },
    });
    console.log("TMDB results:", response.data);

    res.json(response.data);
  } catch (err) {
    console.error("TMDB API Error:", err.message);
    res.status(500).json({ error: "Failed to fetch data from TMDB API." });
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("Movie Search Backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
