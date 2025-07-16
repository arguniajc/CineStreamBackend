const express = require("express");
const router = express.Router();
const controller = require("../controllers/pelicula_genero.controller");

router.get("/", controller.findAll);
router.get("/:id_pelicula/:id_genero", controller.findOne);
router.post("/", controller.create);
router.put("/:id_pelicula/:id_genero", controller.update);
router.delete("/:id_pelicula/:id_genero", controller.remove);

module.exports = router;
