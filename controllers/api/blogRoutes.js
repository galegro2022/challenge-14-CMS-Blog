const router = require('express').Router();
module.exports = router;
const withAuth = require('../../utils/auth');
const {Post}= require('../../models/index');

// Path: controllers/api/blogRoutes.js
// Compare this snippet from controllers/api/index.js:


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

router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(req.body, { where: { id: req.params.id } });
        res.json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;