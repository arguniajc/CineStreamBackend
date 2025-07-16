const idiomaService = require("../services/idioma.service");

exports.create = async (req, res) => {
  try {
    const result = await idiomaService.create(req.body);

    if (Array.isArray(req.body)) {
      if (result.insertados.length === 0 && result.omitidos.length > 0) {
        return res.status(409).json({
          mensaje: "Todos los idiomas ya estaban registrados.",
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
    const result = await idiomaService.findAll();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const result = await idiomaService.findOne(req.params.id);
    if (!result) return res.status(404).json({ message: "Idioma no encontrado" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await idiomaService.update(req.params.id, req.body);
    res.json({ message: "Idioma actualizado", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await idiomaService.remove(req.params.id);
    res.json({ message: "Idioma eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
