const express = require('express');
const api = require('../api/index')
const router = express.Router();

router.get('/', api.test);

router.get('/findTeam', api.findTeam);

module.exports = router;