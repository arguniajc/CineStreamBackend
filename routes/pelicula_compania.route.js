const express = require("express");
const router = express.Router();
const controller = require("../controllers/pelicula_compania.controller");

router.get("/", controller.findAll);
router.get("/:id_pelicula/:id_compania", controller.findOne);
router.post("/", controller.create);
router.put("/:id_pelicula/:id_compania", controller.update);
router.delete("/:id_pelicula/:id_compania", controller.remove);

module.exports = router;
