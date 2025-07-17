const service = require("../services/pelicula_actor.service");

exports.findAll = async (req, res) => {
  const data = await service.findAll();
  res.json(data);
};

exports.findOne = async (req, res) => {
  const data = await service.findOne(req.params.id_pelicula, req.params.id_actor);
  if (data) res.json(data);
  else res.status(404).json({ message: "Relación no encontrada" });
};

exports.create = async (req, res) => {
  const data = await service.create(req.body);
  res.status(201).json(data);
};

// ✅ Update que permite cambiar ID del actor o película
exports.update = async (req, res) => {
  const { id_pelicula, id_actor } = req.params;
  const nuevosDatos = req.body;

  try {
    const resultado = await service.update(id_pelicula, id_actor, nuevosDatos);
    res.json(resultado);
  } catch (error) {
    if (error.message === "La nueva relación ya existe") {
      res.status(400).json({ error: "Esta combinación de película y actor ya está registrada" });
    } else {
      res.status(500).json({ error: "Error al actualizar la relación", detalle: error.message });
    }
  }
};



exports.remove = async (req, res) => {
  await service.remove(req.params.id_pelicula, req.params.id_actor);
  res.status(204).send();
};
