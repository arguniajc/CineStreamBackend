const express = require("express");
const router = express.Router();
const idiomaController = require("../controllers/idioma.controller");

router.post("/", idiomaController.create);
router.get("/", idiomaController.findAll);
router.get("/:id", idiomaController.findOne);
router.put("/:id", idiomaController.update);
router.delete("/:id", idiomaController.delete);

module.exports = router;
