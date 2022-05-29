const express = require("express");
const {
  postService,
  findSingleService,
  findAllService,
  deleteService,
  updateService,
} = require("../controller/service");

const router = express.Router();

router.route("/").post(postService).get(findAllService);
router
  .route("/:id")
  .get(findSingleService)
  .put(updateService)
  .delete(deleteService);
module.exports = router;
