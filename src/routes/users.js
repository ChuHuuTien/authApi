const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth');

const isAuth = authMiddleware.isAuth;

router.get('/profile', isAuth, async (req, res) => {
	res.send(req.user);
});

module.exports = router;
