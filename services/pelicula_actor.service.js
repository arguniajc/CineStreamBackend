const db = require("../models");
const PeliculaActor = db.PeliculaActor;

// 🔍 Obtener todas las relaciones
exports.findAll = async () => {
  return await PeliculaActor.findAll({
    attributes: ["id_pelicula", "id_actor", "personaje"],
    include: [
      {
        model: db.Actor,
        as: "actor",
        attributes: ["nombre", "imagen_url"]
      },
      {
        model: db.Pelicula,
        as: "pelicula",
        attributes: ["titulo_espanol"]
      }
    ]
  });
};

// 🔍 Obtener una relación específica
exports.findOne = async (id_pelicula, id_actor) => {
  return await PeliculaActor.findOne({
    where: { id_pelicula, id_actor },
    attributes: ["id_pelicula", "id_actor", "personaje"],
    include: [
      {
        model: db.Actor,
        as: "actor",
        attributes: ["nombre", "imagen_url"]
      },
      {
        model: db.Pelicula,
        as: "pelicula",
        attributes: ["titulo_espanol"]
      }
    ]
  });
};

// ➕ Crear una nueva relación
exports.create = async (data) => {
  return await PeliculaActor.create(data);
};

// 🔁 Actualizar la relación: permite cambiar IDs
// services/pelicula_actor.service.js

exports.update = async (id_pelicula, id_actor, nuevosDatos) => {
  const transaction = await db.sequelize.transaction();
  try {
    const { id_pelicula: nuevaPelicula, id_actor: nuevoActor, personaje } = nuevosDatos;

    // Si los IDs no cambian, solo actualiza el personaje
    if (id_pelicula == nuevaPelicula && id_actor == nuevoActor) {
      const relacion = await PeliculaActor.findOne({ where: { id_pelicula, id_actor }, transaction });
      if (!relacion) throw new Error("Relación original no encontrada");

      await relacion.update({ personaje }, { transaction });
      await transaction.commit();
      return relacion;
    }

    // Verifica si la nueva relación ya existe
    const existente = await PeliculaActor.findOne({
      where: { id_pelicula: nuevaPelicula, id_actor: nuevoActor },
      transaction
    });

    if (existente) {
      // Actualiza solo el personaje en la existente
      await existente.update({ personaje }, { transaction });
    } else {
      // Crea nueva relación con los nuevos IDs
      await PeliculaActor.create(nuevosDatos, { transaction });
    }

    // Elimina la anterior relación
    await PeliculaActor.destroy({
      where: { id_pelicula, id_actor },
      transaction
    });

    await transaction.commit();
    return nuevosDatos;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};


// ❌ Eliminar una relación
exports.remove = async (id_pelicula, id_actor) => {
  await PeliculaActor.destroy({ where: { id_pelicula, id_actor } });
};
