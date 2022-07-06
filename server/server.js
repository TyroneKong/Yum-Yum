const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const recipeAutoCompleteRoute = require("./routes/recipeAutoComplete");
const recipeListRoute = require("./routes/recipeList");

app.use(express.json());
app.use(cors());

app.use("/", recipeAutoCompleteRoute);
app.use("/", recipeListRoute);

app.get("/", (req, res) => {
  res.json("welcome to my API");
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`listening on ${PORT}`);
  }
});
