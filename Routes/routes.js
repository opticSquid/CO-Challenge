const router = require("express").Router();

router.get("/", require("../API/home"));

module.exports = router;
