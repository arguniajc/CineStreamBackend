const express = require("express");
const router = express.Router();
const companiaController = require("../controllers/compania.controller");

router.post("/", companiaController.create);
router.get("/", companiaController.findAll);
router.get("/:id", companiaController.findOne);
router.put("/:id", companiaController.update);
router.delete("/:id", companiaController.delete);

module.exports = router;
