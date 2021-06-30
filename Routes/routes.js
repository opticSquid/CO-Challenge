const router = require("express").Router();

router.use("/", require("../API/home"));
router.use("/user",require("./user"));

module.exports = router;
