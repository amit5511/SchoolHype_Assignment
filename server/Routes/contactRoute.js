const express = require('express');
const  contact_controller  = require('../Controllers/contactController');
const router = express.Router();



router.route("/message").post(contact_controller);


module.exports=router;