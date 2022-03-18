const express = require("express");
const router = express.Router();

const { getAllPosts } = require("../controller/postController");

router.get("/", getAllPosts);

module.exports = router;
