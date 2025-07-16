const companiaService = require("../services/compania.service");


exports.create = async (req, res) => {
  try {
    const result = await companiaService.create(req.body);
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
    const result = await companiaService.findAll();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const result = await companiaService.findOne(req.params.id);
    if (!result) return res.status(404).json({ message: "Compañía no encontrada" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await companiaService.update(req.params.id, req.body);
    res.json({ message: "Compañía actualizada", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await companiaService.remove(req.params.id);
    res.json({ message: "Compañía eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
