var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

router.post("/get", usersController.getUser);
router.post("/create", usersController.createUser);
router.put("/update", usersController.updateUser);

module.exports = router;