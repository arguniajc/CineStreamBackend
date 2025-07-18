const express = require("express");
const router = express.Router();
const peliculaController = require("../controllers/pelicula.controller");

router.post("/", peliculaController.create);
router.get("/", peliculaController.findAll);
router.get("/:id", peliculaController.findOne);
router.put("/:id", peliculaController.update);
router.delete("/:id", peliculaController.delete);

module.exports = router;
