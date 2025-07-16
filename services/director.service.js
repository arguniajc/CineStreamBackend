const db = require("../models");
const Director = db.Director;
const insertarSinDuplicados = require("../utils/insertarSinDuplicados");

exports.create = async (data) => {
  return await insertarSinDuplicados(Director, "nombre", data);
};

exports.findAll = async () => {
  return await Director.findAll();
};

exports.findOne = async (id) => {
  return await Director.findByPk(id);
};

exports.update = async (id, data) => {
  return await Director.update(data, {
    where: { id }
  });
};

exports.remove = async (id) => {
  return await Director.destroy({
    where: { id }
  });
};
