const express = require("express");
const { useInRouterContext } = require("react-router-dom");
const router = express.Router();

const controller = require("../controllers/propertyController");

//Routes from /api/v1
router.get("/", controller.homepage);
router.get("/app/show_properties", controller.indexProperties);
router.get("/app/show_potentialHousemates", controller.indexPotentialHousemates);
router.get("/app/show_properties/:propID", controller.indexSingleProperties)
router.patch("/app/edit_properties/:propID", controller.editSingleProperties)

router.post("/app/create_properties", controller.createProperties);

module.exports = router;
