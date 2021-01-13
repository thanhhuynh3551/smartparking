const express= require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/", controller.renderHomepage);

router.get("/index", controller.renderHomepage);

router.get("/camera", controller.renderCamerapage);

router.get("/finder", controller.renderFinderpage);

router.get("/report", controller.renderReportpage);

router.get("/parking", controller.renderParkingpage);



module.exports=router;
