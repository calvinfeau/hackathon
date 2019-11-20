const User = require('../models/User');

module.exports = {
    createUser,
    updateUser
    // getUser
}

// async function getUser(req, res) {
//     try {
//         await User.findById(req.body, function(err, user) {
//             res.status(200).json(user)
//         });
//     } catch(err) {
//         res.json({err})
//     }
// }

async function createUser(req, res) {
    try {
        // await
        console.log('controller createUser reached, req.body.form: ', req.body.form);
        var newUser = new User(req.body.form);
        return newUser.save().then(item => res.status(200).json(item._id))
    } catch(err) {console.log('error in createUser mongoose')}
}

async function updateUser(req, res) {
    try {
        // await
        console.log('controller updateUser reached, req.body.userId: ', req.body.userId);
        User.findById(req.body.userId).then(user => {
            user.set(req.body.form);
            return user.save(item => res.status(200).json(item))
        })
    } catch(err) {console.log('error in createUser mongoose')}
}