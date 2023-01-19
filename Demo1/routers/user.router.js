const express = require("express");
const router = express.Router();
const pathJoinFunction = require("../pathJoin/joinpath");

router.get("/", (req, res) => {
  res.sendFile(pathJoinFunction(__dirname, "/../index.html"));
});

module.exports = router;
