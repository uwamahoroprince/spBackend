const express = require("express");
const {
  postStation,
  findAllStation,
  findSingleStation,
  deleteStation,
  updateStation,
} = require("../controller/station");

const router = express.Router();

router.route("/").get(findAllStation).post(postStation);
router
  .route("/:id")
  .get(findSingleStation)
  .delete(deleteStation)
  .put(updateStation);
module.exports = router;
