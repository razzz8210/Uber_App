const blacklistTokenModel = require('../models/blacklistToken.model.js');
const captainModel = require('../models/captain.model.js');
const userModel = require('../models/user.model.js');
const userService = require('../services/user.service.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



module.exports.authUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        console.log('[authUser] Missing token');
        return res.status(401).json({ message: 'Authentication token is missing' });
    }

    try {
        const isBlacklisted = await blacklistTokenModel.findOne({ token });
        if (isBlacklisted) {
            console.log('[authUser] Token is blacklisted');
            return res.status(401).json({ message: 'Token is blacklisted' });
        }

        console.log('[authUser] JWT_SECRET =', process.env.JWT_SECRET);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log('[authUser] Token decoded:', decoded);

        const user = await userModel.findById(decoded._id).select('-password');
        if (!user) {
            console.log('[authUser] No user found with ID:', decoded._id);
            return res.status(401).json({ message: 'Invalid token (user not found)' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log('[authUser] Token verification error:', error.message);
        return res.status(401).json({ message: 'Invalid token' });
    }
};


module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Authentication token is missing' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token: token});
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Token is blacklisted' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id).select('-password');
         if (!captain) {
            console.log('[authCaptain] No Captain found with ID:', decoded._id);
            return res.status(401).json({ message: 'Invalid token (Captain not found)' });
        }
        
        req.captain = captain; // Attach captain to request object
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}