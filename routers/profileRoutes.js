const express = require("express");
const { useInRouterContext } = require("react-router-dom");
const router = express.Router();
const profileController = require("../controllers/profileController");
const propertyController = require("../controllers/propertyController")

router.delete("/:id", profileController.deleteUser);
router.get("/:id", profileController.displayUser);
router.patch("/update", profileController.updateUser);
router.patch("/deleteFromDashboard", profileController.deleteFromDashboard);
router.delete("/delete", profileController.deleteUser);
router.get("/returnToHome", propertyController.indexProperties);

module.exports = router;
