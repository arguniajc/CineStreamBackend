const express = require("express");
const router = express.Router();
const controller = require("../controllers/pelicula_idioma.controller");

router.get("/", controller.findAll);
router.get("/:id_pelicula/:id_idioma", controller.findOne);
router.post("/", controller.create);
router.put("/:id_pelicula/:id_idioma", controller.update);
router.delete("/:id_pelicula/:id_idioma", controller.remove);

module.exports = router;
