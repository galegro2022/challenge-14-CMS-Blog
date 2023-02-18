const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

//router.get('/', (req, res) => { res.send('Hello World!')});
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
