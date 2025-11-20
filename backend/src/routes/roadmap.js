const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        const { targetRole } = req.body;
        if (!targetRole) {
            return res.status(400).json({ error: "targetRole is required" });
        }
        let roadMap = {};
        switch (targetRole) {
            case "Frontend Developer":
                roadMap = {
                    phase1: "1–2 months: HTML, CSS, JavaScript fundamentals, Git",
                    phase2: "2 months: React.js, state management, simple projects",
                    phase3: "1–2 months: advanced React, APIs, deployment, portfolio projects"
                };
                break;

            case "Backend Developer":
                roadMap = {
                    phase1: "1–2 months: Java basics, OOP concepts, Git",
                    phase2: "2 months: Spring Boot, SQL, REST APIs, authentication",
                    phase3: "1–2 months: deployment, microservices basics, system design fundamentals"
                };
                break;

            case "Data Analyst":
                roadMap = {
                    phase1: "1–2 months: Excel, SQL basics, Python fundamentals",
                    phase2: "2 months: Data cleaning, EDA, dashboards (PowerBI/Tableau)",
                    phase3: "1–2 months: statistics, ML basics, 2 data projects"
                };
                break;

            default:
                return res.status(404).json({
                    error: `No roadmap available for role: ${targetRole}`
                });
        }

        return res.json({
            targetRole,
            roadMap
        });

    } catch (error) {
        console.error("Error fetching roadmap:", error);
        return res.status(500).json({error:"Internal Server Error"});
    }
});
module.exports = router;