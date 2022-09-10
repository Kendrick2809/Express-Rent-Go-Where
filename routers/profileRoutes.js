const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.post('/update', profileController.updateUser)

module.exports = router;
