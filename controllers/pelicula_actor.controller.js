const service = require("../services/pelicula_actor.service");

// Obtiene todas las relaciones película-actor
exports.findAll = async (req, res) => {
  try {
    const data = await service.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al listar relaciones película-actor", error });
  }
};

// Obtiene una relación específica entre película y actor
exports.findOne = async (req, res) => {
  try {
    const data = await service.findOne(req.params.id_pelicula, req.params.id_actor);

    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "Relación película-actor no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al buscar la relación", error });
  }
};

// Crea una nueva relación película-actor
exports.create = async (req, res) => {
  try {
    const data = await service.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al crear relación película-actor", error });
  }
};

// Elimina una relación película-actor
exports.remove = async (req, res) => {
  try {
    await service.remove(req.params.id_pelicula, req.params.id_actor);
    res.status(204).send(); // Eliminación exitosa
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar relación película-actor", error });
  }
};
