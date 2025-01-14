const jwt = require('jsonwebtoken');
const Token = require('../models/tokenModel');

exports.authenticate = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const validToken = await Token.findOne({ token });
        if (!validToken) throw new Error();
        req.user = decoded;
        next();
    } catch {
        res.status(403).json({ error: 'Invalid token' });
    }
};
