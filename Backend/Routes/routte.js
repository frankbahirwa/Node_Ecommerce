const express = require('express');
const router = express.Router();
const  controller = require('../Controllers/userController'); 
router.post('/postt',controller.Create)
router.get('/post' , controller.home)

module.exports = router;