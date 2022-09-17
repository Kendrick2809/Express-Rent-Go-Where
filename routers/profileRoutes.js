const express = require("express");
const { useInRouterContext } = require("react-router-dom");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.delete("/:id", profileController.deleteUser);
router.get("/:id", profileController.displayUser);
router.patch("/update", profileController.updateUser);

module.exports = router;
