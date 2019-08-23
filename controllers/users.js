const User = require('../models/User');

module.exports = {
    createUser,
    updateUser
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
        User.findByIdAndUpdate(req.body.userId, req.body, {new: true}, function(err) {return res.status(200).json()})
    } catch(err) {console.log('error in createUser mongoose')}
}