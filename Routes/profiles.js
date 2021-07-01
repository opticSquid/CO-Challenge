const router = require("express").Router();

router.use("/work-profile/create", require("../API/create-workProfile"));
router.use("/non-work-profile/create", require("../API/create-nonWorkProfile"));
router.use("/daily-schedule", require("../API/get-dayProfile"));
router.use("/weekly-schedule", require("../API/get-weekprofile"));
module.exports = router;
