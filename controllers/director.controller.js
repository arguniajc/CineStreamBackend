const directorService = require("../services/director.service");


exports.create = async (req, res) => {
  try {
    const result = await directorService.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    if (err.message && err.message.includes("ya está registrado")) {
      return res.status(409).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
}

exports.findAll = async (req, res) => {
  try {
    const result = await directorService.findAll();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const result = await directorService.findOne(req.params.id);
    if (!result) return res.status(404).json({ message: "Director no encontrado" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await directorService.update(req.params.id, req.body);
    res.json({ message: "Director actualizado", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await directorService.remove(req.params.id);
    res.json({ message: "Director eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
