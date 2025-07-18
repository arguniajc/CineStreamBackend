const db = require("../models");
const Pelicula = db.Pelicula;
const insertarSinDuplicados = require("../utils/insertarSinDuplicados");

exports.create = async (data) => {
  return await insertarSinDuplicados(Pelicula, "titulo_espanol", data);
};

exports.findAll = async () => {
  return await Pelicula.findAll();
};

exports.findOne = async (id) => {
  return await Pelicula.findByPk(id);
};

exports.update = async (id, data) => {
  return await Pelicula.update(data, {
    where: { id }
  });
};

exports.remove = async (id) => {
  return await Pelicula.destroy({
    where: { id }
  });
};
