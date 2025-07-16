const express = require("express");
const router = express.Router();
const generoController = require("../controllers/genero.controller");

router.post("/", generoController.create);
router.get("/", generoController.findAll);
router.get("/:id", generoController.findOne);
router.put("/:id", generoController.update);
router.delete("/:id", generoController.delete);

module.exports = router;
