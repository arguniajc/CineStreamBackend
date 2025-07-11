const express = require("express");
const router = express.Router();
const actorController = require("../controllers/actor.controller");

router.post("/", actorController.create);
router.get("/", actorController.findAll);
router.get("/:id", actorController.findOne);
router.put("/:id", actorController.update);
router.delete("/:id", actorController.delete);

module.exports = router;
