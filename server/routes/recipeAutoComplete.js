const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/autorecipe/:input", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/auto-complete",
    params: { prefix: req.params.input },
    headers: {
      "X-RapidAPI-Key": process.env.APIKEY,
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
