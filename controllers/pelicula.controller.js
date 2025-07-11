const peliculaService = require("../services/pelicula.service");

// Crear
exports.create = async (req, res) => {
  try {
    const result = await peliculaService.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todas
exports.findAll = async (req, res) => {
  try {
    const result = await peliculaService.findAll();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una por ID
exports.findOne = async (req, res) => {
  try {
    const result = await peliculaService.findOne(req.params.id);
    if (!result) return res.status(404).json({ message: "Película no encontrada" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar
exports.update = async (req, res) => {
  try {
    const result = await peliculaService.update(req.params.id, req.body);
    res.json({ message: "Película actualizada", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar
exports.delete = async (req, res) => {
  try {
    await peliculaService.remove(req.params.id);
    res.json({ message: "Película eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
