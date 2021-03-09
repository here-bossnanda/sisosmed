const router = require('express').Router();
const sosialMediaRouter = require('./sosialMedia')

router.use('api/aplikasi', sosialMediaRouter);

module.exports = router