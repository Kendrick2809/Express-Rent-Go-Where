const express = require("express");
const mongoose = require("mongoose");

const { useInRouterContext } = require("react-router-dom");
const router = express.Router();

const controller = require("../controllers/propertyController");

//Routes from /api/v1
router.get("/", controller.homepage);

router.get("/app/show_properties", controller.indexProperties);
router.get("/app/show_properties/:propID", controller.indexSingleProperties);
router.post("/app/create_properties", controller.createProperties);
router.patch("/app/edit_properties/:propID", controller.editSingleProperties);
router.delete(
  "/app/delete_properties/:propID",
  controller.deleteSingleProperties
);
router.get(
  "/app/show_potentialHousemates",
  controller.indexPotentialHousemates
);
router.get(
  "/board/show_properties/:userID",
  controller.displayPropertyDashboard
);
router.post("/app/filter_properties", controller.filterProperties);
router.post("/app/filter_propertiesByUser", controller.filterPropertiesByUser);

module.exports = router;
