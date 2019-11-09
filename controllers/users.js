const User = require('../models/User');

module.exports = {
    createUser,
    updateUser,
    getUser
}

async function getUser(req, res) {
    try {
        await User.findById(req.body, function(err, user) {
            res.status(200).json(user)
        });
    } catch(err) {
        res.json({err})
    }
}

async function createUser(req, res) {
    try {
        await
        console.log('req body passed in controller: ', req.body);
        var newUser = new User(req.body);
        return newUser.save().then(item => {
            console.log('item created: ', item)
            res.status(200).json(item);
        })
    } catch(err) {console.log('error in createUser mongoose')}
}

async function updateUser(req, res) {
    try {
        await
        console.log('req body passed in controller: ', req.body);
        console.log('req body userId passed in controller: ', req.body.userId);
        User.findById(req.body.userId).then(user => {
            user.set(req.body);
            return user.save(item => res.status(200).json(item))
        })
    } catch(err) {console.log('error in createUser mongoose')}
}