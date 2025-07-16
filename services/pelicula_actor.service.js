const db = require("../models");
const PeliculaActor = db.PeliculaActor;

exports.findAll = async () => {
  return await PeliculaActor.findAll({
    attributes: ["id_pelicula", "id_actor", "personaje"],
    include: [
      {
        model: db.Actor,
        as: "actor",
        attributes: ["nombre"]
      },
      {
        model: db.Pelicula,
        as: "pelicula",
        attributes: ["titulo_espanol"]
      }
    ]
  });
};

exports.findOne = async (id_pelicula, id_actor) => {
  return await PeliculaActor.findOne({
    where: { id_pelicula, id_actor },
    attributes: ["id_pelicula", "id_actor", "personaje"],
    include: [
      {
        model: db.Actor,
        as: "actor",
        attributes: ["nombre"]
      },
      {
        model: db.Pelicula,
        as: "pelicula",
        attributes: ["titulo_espanol"]
      }
    ]
  });
};

exports.create = async (data) => {
  return await PeliculaActor.create(data);
};

exports.update = async (id_pelicula, id_actor, data) => {
  const item = await PeliculaActor.findOne({ where: { id_pelicula, id_actor } });
  if (!item) throw new Error("No encontrado");
  return await item.update(data);
};

exports.remove = async (id_pelicula, id_actor) => {
  await PeliculaActor.destroy({ where: { id_pelicula, id_actor } });
};
