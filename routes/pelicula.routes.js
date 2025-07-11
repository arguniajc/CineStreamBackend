const express = require("express");
const router = express.Router();
const peliculaController = require("../controllers/pelicula.controller");

// Crear película
router.post("/", peliculaController.create);

// Obtener todas las películas
router.get("/", peliculaController.findAll);

// Obtener una película por ID
router.get("/:id", peliculaController.findOne);

// Actualizar película por ID
router.put("/:id", peliculaController.update);

// Eliminar película por ID
router.delete("/:id", peliculaController.delete);

module.exports = router;
