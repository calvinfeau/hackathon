const User = require('../models/User');

module.exports = {
    createUser,
    updateUser,
    getUser
}

async function getUser(req, res) {
    try {
        console.log('controller getUser reached, req.body: ', req.body);
        await User.find({
            applicant: {
                firstName: req.body.applicant.firstName,
                lastName: req.body.applicant.lastName
            },
            birth: req.body.birth})
            .then(profile => {
                console.log('profile passed in .then after User.find is called', profile);
                return res.status(200).json(profile)})
            .catch(err => (console.log('error in User.find query: ', err.message)))
    } 
    catch(err) {console.log('error in getUser mongoose')}
}

async function createUser(req, res) {
    try {
        console.log('controller createUser reached, req.body: ', req.body);
        var newUser = new User(req.body);
        return newUser.save().then(item => res.status(200).json(item._id))
    } 
    catch(err) {console.log('error in createUser mongoose')}
}

async function updateUser(req, res) {
    try {
        console.log('controller updateUser reached, req.body.userId: ', req.body.userId);
        User.findById(req.body.userId).then(user => {
            user.set(req.body.form);
            return user.save(item => res.status(200).json(item))
        })
    } 
    catch(err) {console.log('error in createUser mongoose')}
}