const jwt = require('jsonwebtoken');

// Middleware to check for a valid JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).send({ message: "No token provided" });

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send({ message: "User is not authenticated" });

        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
