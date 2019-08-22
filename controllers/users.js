const User = require('../models/User');

module.exports = {
    createUser
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