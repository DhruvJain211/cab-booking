const CaptainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    firstname,lastname,email,password,
    color,plate,capacity,vechicleType
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vechicleType) {
        throw new Error('All input is required');
    }
    const captain = CaptainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vechicle: {
            color,
            plate,
            capacity,
            vechicleType
        }

    });
    return captain;
}