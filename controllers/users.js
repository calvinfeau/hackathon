const User = require('../models/User');

module.exports = {
    createUser
}

function createUser(req, res) {
    console.log('req body name', req.body.name);

    var newUser = new User(req.body);
    newUser.save(function(err) {
        return user.save((item) => res.status(200).json(item))
    })
}