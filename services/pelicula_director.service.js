const db = require("../models");
const PeliculaDirector = db.PeliculaDirector;
const Pelicula = db.Pelicula;
const Director = db.Director;

exports.findAll = async () => {
  const data = await PeliculaDirector.findAll({
    include: [
      { model: Pelicula, as: "pelicula", attributes: ["titulo_espanol"] },
      { model: Director, as: "director", attributes: ["nombre", "imagen_url"] }
    ]
  });

  // Transformamos la respuesta para solo incluir los campos necesarios
  return data.map(item => ({
    id_pelicula: item.id_pelicula,
    id_director: item.id_director,
    titulo_pelicula: item.pelicula?.titulo_espanol || "",
    nombre_director: item.director?.nombre || "",
    imagen_director: item.director?.imagen_url || ""
  }));
};

exports.findOne = async (id_pelicula, id_director) => {
  const item = await PeliculaDirector.findOne({
    where: { id_pelicula, id_director },
    include: [
      { model: Pelicula, as: "pelicula", attributes: ["titulo_espanol"] },
      { model: Director, as: "director", attributes: ["nombre", "imagen_url"] }
    ]
  });

  if (!item) return null;

  return {
    id_pelicula: item.id_pelicula,
    id_director: item.id_director,
    titulo_pelicula: item.pelicula?.titulo_espanol || "",
    nombre_director: item.director?.nombre || "",
    imagen_director: item.director?.imagen_url || ""
  };
};

exports.create = async (data) => {
  return await PeliculaDirector.create(data);
};

exports.update = async (id_pelicula, id_director, data) => {
  const item = await PeliculaDirector.findOne({ where: { id_pelicula, id_director } });
  if (!item) throw new Error("No encontrado");
  return await item.update(data);
};

exports.remove = async (id_pelicula, id_director) => {
  await PeliculaDirector.destroy({ where: { id_pelicula, id_director } });
};
