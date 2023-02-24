const router = require('express').Router();
const userRoutes = require('./userRoutes');
const{ User} = require('../../models');


//signs up a new user
router.post('/register', async (req, res) => {
    try {
        console.log("req", req.body)
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//logs in a user
router.post('/login', async (req, res) => {
    try {
        console.log("HELOO WORLD")
        const userData = await User.findOne({ where: { name: req.body.name } });
        console.log("BLUE")
        console.log(userData)
        console.log("================================ 11")
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            console.log("================================ 22")
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            console.log("================================ 33")
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        req.session.save(() => {
            console.log("================================ 44")
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            console.log(req.session)
            console.log("================================")
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//logs out a user
router.post('/logout', (req, res) => {                       
    console.log("logged in")
    console.log(req.session)
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
        // console.log(req.session.logged_in)
    } else {
        res.status(404).end();
    }
});

//delete a user
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({ where: { id: req.params.id } });
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//update a user
router.post('/:id', async (req, res) => {
    try {
        const userData = await User.update(req.body, { where: { id: req.params.id } });
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;