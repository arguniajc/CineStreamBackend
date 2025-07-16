const service = require("../services/pelicula_idioma.service");

exports.findAll = async (req, res) => {
  try {
    const data = await service.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al listar relaciones", error });
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await service.findOne(req.params.id_pelicula, req.params.id_idioma);
    if (data) res.json(data);
    else res.status(404).json({ message: "Relación no encontrada" });
  } catch (error) {
    res.status(500).json({ message: "Error al buscar relación", error });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await service.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al crear relación", error });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await service.update(req.params.id_pelicula, req.params.id_idioma, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar relación", error });
  }
};

exports.remove = async (req, res) => {
  try {
    await service.remove(req.params.id_pelicula, req.params.id_idioma);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar relación", error });
  }
};
