const db = require("../models");
const Idioma = db.Idioma;
const insertarSinDuplicados = require("../utils/insertarSinDuplicados");

exports.create = async (data) => {
  return await insertarSinDuplicados(Idioma, "nombre", data);
};

exports.findAll = async () => {
  return await Idioma.findAll();
};

exports.findOne = async (id) => {
  return await Idioma.findByPk(id);
};

exports.update = async (id, data) => {
  return await Idioma.update(data, {
    where: { id }
  });
};

exports.remove = async (id) => {
  return await Idioma.destroy({
    where: { id }
  });
};
