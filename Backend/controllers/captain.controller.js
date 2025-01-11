const CaptainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
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