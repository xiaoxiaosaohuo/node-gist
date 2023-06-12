const express = require('express');
const router = express.Router();
const blogRoute = require('./blog.route');

router.use('/blog',blogRoute)

module.exports = router;