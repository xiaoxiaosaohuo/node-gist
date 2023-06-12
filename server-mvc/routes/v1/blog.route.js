const express = require('express');
const BlogController = require( '../../controllers/blog.controller');
const router = express.Router();

router.get("/news/list", BlogController.getNewsList);
router.get("/news/:id", BlogController.getNewsById);
router.get("/posts/list", BlogController.getPostsList);
router.get("/posts/:id", BlogController.getPostById);
router.get("/search/:keyword", BlogController.getArticlesBySearch);
router.get("/tags/:tag", BlogController.getArticlesByTag);
module.exports = router;