const express = require("express");
const { useInRouterContext } = require("react-router-dom");
const router = express.Router();

const controller = require("../controllers/controller");

//Routes from /api/v1
router.get("/", controller.homepage);
router.get("/app/show_properties", controller.indexProperties);
router.get(
  "/app/show_potentialHousemates",
  controller.indexPotentialHousemates
);



module.exports = router;
