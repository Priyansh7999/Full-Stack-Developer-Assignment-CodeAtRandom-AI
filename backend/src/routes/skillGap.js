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
        const requiredSkills = skillData[targetRole];

        if (!requiredSkills) {
            return res.status(404).json({ error: "Target role not found" });
        }
        const userSkills = currentSkills.map(skill => skill.toLowerCase());

     
        const matchedSkills = requiredSkills.filter(skill => userSkills.includes(skill.toLowerCase()));

       
        const missingSkills = requiredSkills.filter(skill => !userSkills.includes(skill.toLowerCase()));

      
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