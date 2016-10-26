/**
 * Created by cleverjam on 10/26/16.
 */
var express = require("express");
var controller = require("./employee.controller");
var router = express.Router();

require("./seed");

router.get("/", controller.index);

module.exports = router;