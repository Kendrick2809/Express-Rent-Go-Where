const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.patch('/update', profileController.updateUser)
router.delete('/delete', profileController.deleteUser)

module.exports = router;
