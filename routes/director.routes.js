const express = require("express");
const router = express.Router();
const directorController = require("../controllers/director.controller");

router.post("/", directorController.create);
router.get("/", directorController.findAll);
router.get("/:id", directorController.findOne);
router.put("/:id", directorController.update);
router.delete("/:id", directorController.delete);

module.exports = router;
