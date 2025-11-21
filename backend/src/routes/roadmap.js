const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        const { targetRole } = req.body;

        if (!targetRole) {
            return res.status(400).json({ error: "targetRole is required" });
        }

        let roadmap = [];

        switch (targetRole) {
            case "Frontend Developer":
                roadmap = [
                    "1–2 months: HTML, CSS, JavaScript fundamentals, Git",
                    "2 months: React.js, state management, simple projects",
                    "1–2 months: advanced React, APIs, deployment, portfolio projects"
                ];
                break;

            case "Backend Developer":
                roadmap = [
                    "1–2 months: Java basics, OOP concepts, Git",
                    "2 months: Spring Boot, SQL, REST APIs, authentication",
                    "1–2 months: deployment, microservices basics, system design fundamentals"
                ];
                break;

            case "Data Analyst":
                roadmap = [
                    "1–2 months: Excel, SQL basics, Python fundamentals",
                    "2 months: Data cleaning, EDA, dashboards (PowerBI/Tableau)",
                    "1–2 months: statistics, ML basics, 2 data projects"
                ];
                break;

            default:
                return res.status(404).json({
                    error: `No roadmap available for role: ${targetRole}`
                });
        }

        return res.json({
            targetRole,
            roadmap,    
        });

    } catch (error) {
        console.error("Error fetching roadmap:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
