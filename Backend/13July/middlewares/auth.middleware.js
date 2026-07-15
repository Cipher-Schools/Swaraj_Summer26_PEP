const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    // const token = req.headers.authorization;
    const token = req.body.token;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET);
    }

    next();
}

module.exports = authMiddleware;