const express = require("express");
const router = express.Router();
const { getTopStories, getStoryDetails } = require("../utils/hnClient");

router.get("/", async (req, res) => {
  try {
    const topStoryIds = await getTopStories();

    const storyPromises = topStoryIds.map((id) => getStoryDetails(id));
    const stories = await Promise.all(storyPromises);

    return res.json({
      count: stories.length,
      stories,
    });
  } catch (err) {
    console.error("HackerNews API Error:", err);
    res.status(500).json({
      error: "Failed to fetch news",
    });
  }
});

module.exports = router;
