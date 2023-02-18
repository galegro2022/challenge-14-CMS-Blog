const router = require('express').Router();
module.exports = router;
const withAuth = require('../../utils/auth');
const {Comment} = require('../../models/index');

//insert new comment for a blog post
router.post('/:id', withAuth, async (req, res) => { 
    const body = req.body;
    const id = req.params.id;

    try {
        const postData = await Comment.create({ body, user_id: req.session.user_id,post_id:id});
        res.json (postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete comment by id for dashboard
router.delete('/:id', withAuth, async (req, res) => {
    const id = req.params.id;

    try {
        const postData = await Comment.destroy({ user_id: req.session.user_id,post_id:id});
        res.json (postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get comment for a blog post
router.get("/:id", withAuth, async (req, res) => {
    const id = req.params.id;
    try {
        const postData = await Comment.findAll({ user_id: req.session.user_id,post_id:id});
        res.json (postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;