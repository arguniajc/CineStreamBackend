const generoService = require("../services/genero.service");

exports.create = async (req, res) => {
  try {
    const result = await generoService.create(req.body);

    if (Array.isArray(req.body)) {
      if (result.insertados.length === 0 && result.omitidos.length > 0) {
        return res.status(409).json({
          mensaje: "Todos los géneros ya estaban registrados.",
          omitidos: result.omitidos
        });
      }
      return res.status(201).json(result);
    }

    return res.status(201).json(result);

  } catch (err) {
    if (err.message.includes("ya está registrado")) {
      return res.status(409).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const result = await generoService.findAll();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const result = await generoService.findOne(req.params.id);
    if (!result) return res.status(404).json({ message: "Género no encontrado" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await generoService.update(req.params.id, req.body);
    res.json({ message: "Género actualizado", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await generoService.remove(req.params.id);
    res.json({ message: "Género eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
