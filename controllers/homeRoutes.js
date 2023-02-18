const { User, Post } = require('../models');

const router = require('express').Router();
//regular homepage route
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({});

        const posts = postData.map((post) => post.get({ plain: true }));

        console.log(posts)
        res.render('homepage', { posts });
    } catch(err) {
        res.status(500).json(err);
    }
});

//user login
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
//signup
router.get('/signup', (req, res) => {
    
    res.render('signup');
});



module.exports = router;