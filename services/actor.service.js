const db = require("../models");
const Actor = db.Actor;

exports.create = async (data) => {
  try {
    return await Actor.create(data);
  } catch (err) {
    //Validar si el actor ya existe
    if (err.name === "SequelizeUniqueConstraintError") {
      const valor = data?.nombre || "[nombre no disponible]";
      throw new Error(`El actor "${valor}" ya está registrado.`);
    }
    throw err;
  }
};

exports.findAll = async () => {
  return await Actor.findAll();
};

exports.findOne = async (id) => {
  return await Actor.findByPk(id);
};

exports.update = async (id, data) => {
  return await Actor.update(data, {
    where: { id }
  });
};

exports.remove = async (id) => {
  return await Actor.destroy({
    where: { id }
  });
};
