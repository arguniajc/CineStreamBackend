const peliculaService = require("../services/pelicula.service");

exports.create = async (req, res) => {
  try {
    const result = await peliculaService.create(req.body);

    if (Array.isArray(req.body)) {
      if (result.insertados.length === 0 && result.omitidos.length > 0) {
        return res.status(409).json({
          mensaje: "Todas las películas ya estaban registradas.",
          omitidos: result.omitidos
        });
      }
      return res.status(201).json(result);
    }

    return res.status(201).json(result);

  } catch (err) {
    if (err.message && err.message.includes("ya está registrado")) {
      return res.status(409).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const result = await peliculaService.findAll();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const result = await peliculaService.findOne(req.params.id);
    if (!result) return res.status(404).json({ message: "Película no encontrada" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await peliculaService.update(req.params.id, req.body);
    res.json({ message: "Película actualizada", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await peliculaService.remove(req.params.id);
    res.json({ message: "Película eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
