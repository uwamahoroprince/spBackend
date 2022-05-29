const express = require("express");
const {
  postServiceRequests,
  findAllServiceRequests,
  findSingleServiceRequests,
  deleteServiceRequests,
  updateServiceRequests,
} = require("../controller/serviceRequest");

const router = express.Router();

router.route("/").get(findAllServiceRequests).post(postServiceRequests);
router
  .route("/:id")
  .get(findSingleServiceRequests)
  .delete(deleteServiceRequests)
  .put(updateServiceRequests);
module.exports = router;
