const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const BlogRoutes = require('./blogRoutes');

router.use('/users', userRoutes);
router.use('/blogs', BlogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;