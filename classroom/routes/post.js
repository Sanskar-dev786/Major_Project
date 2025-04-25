const express = require("express");
const router = express.Router();

//Index
router.get("/", (req, res) => {
  res.send("GET for posts ");
});
//Show routes
router.get("/:id", (req, res) => {
  res.send("GET for posts id");
});

//POST
router.post("/", (req, res) => {
  res.send("POST for posts");
});

//Delete
router.delete("/:id", (req, res) => {
  res.send("Delete posts");
});
module.exports = router;
