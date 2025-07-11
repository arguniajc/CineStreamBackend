const db = require("../models");
const Pelicula = db.Pelicula;

// Crear película
exports.create = async (data) => {
  return await Pelicula.create(data);
};

// Obtener todas las películas (incluyendo relaciones)
exports.findAll = async () => {
  return await Pelicula.findAll({
    include: [db.Actor, db.Director, db.Compania, db.Genero, db.Idioma]
  });
};

// Obtener una película por ID (incluyendo relaciones)
exports.findOne = async (id) => {
  return await Pelicula.findByPk(id, {
    include: [db.Actor, db.Director, db.Compania, db.Genero, db.Idioma]
  });
};

// Actualizar película por ID
exports.update = async (id, data) => {
  return await Pelicula.update(data, {
    where: { id }
  });
};

// Eliminar película por ID
exports.remove = async (id) => {
  return await Pelicula.destroy({
    where: { id }
  });
};
