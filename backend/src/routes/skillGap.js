const express = require('express');
const router = express.Router();
const skillData = require('../data/skillData.json');

// /api/skill-gap
router.post('/', (req, res) => {
    try {
        const { targetRole, currentSkills } = req.body;
        if (!targetRole || !currentSkills) {
            return res.status(400).json({ error: "targetRole and currentSkills are required" });
        }
        // required skills for the target role
        const requiredSkills = skillData[targetRole];

        if (!requiredSkills) {
            return res.status(404).json({ error: "Target role not found" });
        }
        // user skills in lowercase
        const userSkills = currentSkills.map(skill => skill.toLowerCase());

        // matched skills in both
        const matchedSkills = requiredSkills.filter(skill => userSkills.includes(skill.toLowerCase()));

        // missing skills
        const missingSkills = requiredSkills.filter(skill => !userSkills.includes(skill.toLowerCase()));

        // recommendation
        const recommended = missingSkills.length > 0 ? 'Consider learning ' + missingSkills.join(', ') + ' to bridge the skill gap.' : 'You have all the required skills for this role.';

        const response = {
            targetRole,
            matchedSkills,
            missingSkills,
            recommendation: recommended,
            learningOrder: missingSkills
        }
        return res.json(response);
    } catch (error) {
        console.error("Error processing skill gap:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;