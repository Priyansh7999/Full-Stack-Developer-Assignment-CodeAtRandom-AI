const express = require('express');
const cors = require("cors");

const skillGapRoutes = require('./routes/skillGap');
const roadmapRoutes = require('./routes/roadmap');
const newsRoutes = require("./routes/news");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/skill-gap', skillGapRoutes);
app.use('/api/roadmap', roadmapRoutes);
app.use("/api/news", newsRoutes);

module.exports = app;