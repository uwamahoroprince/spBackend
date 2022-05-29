const express = require("express");

const router = express.Router();

const {
  findAllfuelServiceRequest,
  postFuelServiceRequest,
  deletefuelServiceRequest,
  updatefuelServiceRequest,
  findSinglefuelServiceRequest,
} = require("../controller/fuelServiceRequest");

router.route("/").post(postFuelServiceRequest).get(findAllfuelServiceRequest);
router
  .route("/:id")
  .put(updatefuelServiceRequest)
  .delete(deletefuelServiceRequest)
  .get(findSinglefuelServiceRequest);
module.exports = router;
