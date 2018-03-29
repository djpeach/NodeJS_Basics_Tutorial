var express = require('express');
var router = express.Router();
const User = require('../models/user_model');

router.post('/create', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;

    User.create({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password
    }).then(() => {
        res.end('User was created.');
    }).catch(() => {
        res.end('Error creating user.');
    });
});

router.get('/listUsers', (req, res) => {
    User.find().exec().then((all_users) => {
        res.json(all_users);
    }).catch(() => {
        res.end('Error fetching all the users from database');
    });
});

router.put('/editUser', (req, res) => {
    User.findUserByEmail(req.body.email).then((foundUser) => {
        res.json(foundUser);
    }).catch(() => {
        res.end('Error finding user with that email');
    })
});

router.delete('/removeUser', (req, res) => {
    User.remove({email: req.body.email}).exec().then(() => {
        res.end('User successfully deleted');
    }).catch(() => {
        res.end('Error removing user with that email');
    });
});

module.exports = router;