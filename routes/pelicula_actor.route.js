const express = require("express");
const router = express.Router();
const controller = require("../controllers/pelicula_actor.controller");

router.get("/", controller.findAll);
router.get("/:id_pelicula/:id_actor", controller.findOne);
router.post("/", controller.create);
router.put("/:id_pelicula/:id_actor", controller.update);
router.delete("/:id_pelicula/:id_actor", controller.remove);

module.exports = router;
