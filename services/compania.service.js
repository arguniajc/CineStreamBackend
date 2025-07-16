const db = require("../models");
const Compania = db.Compania;
const insertarSinDuplicados = require("../utils/insertarSinDuplicados");

exports.create = async (data) => {
  return await insertarSinDuplicados(Compania, "nombre", data);
};

exports.findAll = async () => {
  return await Compania.findAll();
};

exports.findOne = async (id) => {
  return await Compania.findByPk(id);
};

exports.update = async (id, data) => {
  return await Compania.update(data, {
    where: { id }
  });
};

exports.remove = async (id) => {
  return await Compania.destroy({
    where: { id }
  });
};
