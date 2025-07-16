const express = require("express");
const router = express.Router();
const controller = require("../controllers/pelicula_director.controller");

router.get("/", controller.findAll);
router.get("/:id_pelicula/:id_director", controller.findOne);
router.post("/", controller.create);
router.put("/:id_pelicula/:id_director", controller.update);
router.delete("/:id_pelicula/:id_director", controller.remove);

module.exports = router;
