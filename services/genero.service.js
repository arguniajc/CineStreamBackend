const db = require("../models");
const Genero = db.Genero;
const insertarSinDuplicados = require("../utils/insertarSinDuplicados");

exports.create = async (data) => {
  return await insertarSinDuplicados(Genero, "nombre", data);
};

exports.findAll = async () => {
  return await Genero.findAll();
};

exports.findOne = async (id) => {
  return await Genero.findByPk(id);
};

exports.update = async (id, data) => {
  return await Genero.update(data, { where: { id } });
};

exports.remove = async (id) => {
  return await Genero.destroy({ where: { id } });
};
