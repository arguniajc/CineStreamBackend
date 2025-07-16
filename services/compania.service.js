const db = require("../models");
const Compania = db.Compania;

exports.create = async (data) => {
  try {
    return await Compania.create(data);
  } catch (err) {
    //Validar si la compañia ya existe
    if (err.name === "SequelizeUniqueConstraintError") {
      const valor = data?.nombre || "[nombre no disponible]";
      throw new Error(`La compañia "${valor}" ya está registrada.`);
    }
    throw err;
  }
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
