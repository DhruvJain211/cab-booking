const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vechicle.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vechicle.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
    body('vechicle.capacity').isInt({min: 1}).withMessage('Capacity must be at least 1'),
    body('vechicle.vechicleType').isIn(['car', 'auto', 'bike']).withMessage('Invalid vechicle type')
],
captainController.registerCaptain 
);


router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],
captainController.loginCaptain
); 

router.get('/profile',authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;
