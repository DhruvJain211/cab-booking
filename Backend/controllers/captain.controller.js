const CaptainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blackListTokensModel = require('../models/blackListTokens.model');
const {validationResult} = require('express-validator');


module.exports.registerCaptain = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password, vechicle} = req.body;

    const isCaptainExists = await CaptainModel.findOne({email});
    if (isCaptainExists) {
        return res.status(400).json({message: 'Captain already exists'});
    }

    const hashedPassword = await CaptainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vechicle.color,
        plate: vechicle.plate,
        capacity: vechicle.capacity,
        vechicleType: vechicle.vechicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({token, captain });


}

module.exports.loginCaptain = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    const captain = await CaptainModel.findOne({email}).select('+password');

    if (!captain) {
        return res.status(400).json({message: 'Invalid email or password'});
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
        return res.status(400).json({message: 'Invalid email or password'});
    }

    const token = captain.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({token, captain});

}    

module.exports.getCaptainProfile = async (req, res, next) => {
    const captain = req.captain;

    res.status(200).json({captain});
}   

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token||req.headers.authorization?.split(' ')[1];

    await blackListTokensModel.create({token});

    res.clearCookie('token');

    res.status(200).json({message: 'Logout successfully'});

}