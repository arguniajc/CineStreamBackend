const db = require("../models");
const Director = db.Director;

exports.create = async (data) => {
  try {
    return await Director.create(data);
  } catch (err) {
    //Validar si el director ya existe
    if (err.name === "SequelizeUniqueConstraintError") {
      const valor = data?.nombre || "[nombre no disponible]";
      throw new Error(`El director "${valor}" ya está registrado.`);
    }
    throw err;
  }
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
