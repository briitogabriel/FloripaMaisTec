const express = require('express');
const router = express.Router();

const routerController = require(`../controllers/controller`)

router.get('/get-all-users/', routerController.getAllUsers);
router.get('/get-user-id/:id', routerController.getUserId);
router.post('/add-user/', routerController.addUser);


module.exports = router;