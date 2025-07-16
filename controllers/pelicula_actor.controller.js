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

exports.update = async (req, res) => {
  const data = await service.update(req.params.id_pelicula, req.params.id_actor, req.body);
  res.json(data);
};

exports.remove = async (req, res) => {
  await service.remove(req.params.id_pelicula, req.params.id_actor);
  res.status(204).send();
};
