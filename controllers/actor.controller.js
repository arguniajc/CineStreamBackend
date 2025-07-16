const actorService = require("../services/actor.service");

exports.create = async (req, res) => {
  try {
    const result = await actorService.create(req.body);

    if (Array.isArray(req.body)) {
      if (result.insertados.length === 0 && result.omitidos.length > 0) {
        return res.status(409).json({
          mensaje: "Todos los actores ya estaban registrados.",
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
    const result = await actorService.findAll();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const result = await actorService.findOne(req.params.id);
    if (!result) return res.status(404).json({ message: "Actor no encontrado" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await actorService.update(req.params.id, req.body);
    res.json({ message: "Actor actualizado", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await actorService.remove(req.params.id);
    res.json({ message: "Actor eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
