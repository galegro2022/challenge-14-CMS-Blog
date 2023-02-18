const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {user_id: req.session.user_id},
            attributes: ['id', 'title', 'content', 'created_at'],
            include: [{
                model: User,
                attributes: ['username']
            }]
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    } catch (err) {
        res.status(500).json(err);
    }
});

//insert new post for dashboard
router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    try {
        const postData = await Post.create({ body, user_id: req.session.user_id });
        res.json (postData);
    } catch (err) {
        res.status(500).json(err);
    }
});
//delete post by id for dashboard

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({ where: { id: req.params.id } });
        res.json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});
        
        
module.exports = router;