const router = require("express").Router();

router.use("/newuser",require("../API/signup"));
router.use("/login",require("../API/login"));

module.exports = router;