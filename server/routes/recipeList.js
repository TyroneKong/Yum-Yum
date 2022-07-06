const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/recipeList/:input", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: {
      from: "0",
      size: "20",
      tags: "under_30_minutes",
      q: req.params.input,
    },
    headers: {
      "X-RapidAPI-Key": "2130c8f6c7msh1f292e2b2420a0ep1b215fjsn556d765ad938",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  try {
    const { data } = await axios.request(options);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
