const userModel = require('../models/user.model.js')
const userService = require('../services/user.service.js')
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model.js');


module.exports.registerUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array()});
    }
    console.log(req.body);

    const {fullname , email ,password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });
    if(isUserAlreadyExist) { 
        return res.status(400).json({ message: 'User with this email already exists' });
    }
    
    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token ,user});
}

module.exports.loginUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array()});
    }
    console.log(req.body);

    const {email , password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');
    if(!user) {
        return res.status(401).json({message:"User not found"});
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch) {
        return res.status(401).json({message:"Invalid credentials"});
    }

    const token = user.generateAuthToken();
    res.status(200).json({ token ,user});
}

module.exports.getUserProfile = async(req,res,next)=>{
    res.status(200).json({ user: req.user } );
}

module.exports.logoutUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided for logout' });
    }

    try {
        await blacklistTokenModel.create({ token });
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error('[logoutUser] Error while blacklisting token:', error.message);
        res.status(500).json({ message: 'Logout failed' });
    }
};
