const db = require("../models");
const PeliculaIdioma = db.PeliculaIdioma;
const Pelicula = db.Pelicula;
const Idioma = db.Idioma;

exports.findAll = async () => {
  const data = await PeliculaIdioma.findAll({
    include: [
      { model: Pelicula, as: "pelicula", attributes: ["id", "titulo_espanol"] },
      { model: Idioma, as: "idioma", attributes: ["id", "nombre"] }
    ]
  });

  return data.map(item => ({
    id_pelicula: item.id_pelicula,
    id_idioma: item.id_idioma,
    titulo_pelicula: item.pelicula?.titulo_espanol || "",
    nombre_idioma: item.idioma?.nombre || ""
  }));
};

exports.findOne = async (id_pelicula, id_idioma) => {
  const item = await PeliculaIdioma.findOne({
    where: { id_pelicula, id_idioma },
    include: [
      { model: Pelicula, as: "pelicula", attributes: ["id", "titulo_espanol"] },
      { model: Idioma, as: "idioma", attributes: ["id", "nombre"] }
    ]
  });

  return item
    ? {
        id_pelicula: item.id_pelicula,
        id_idioma: item.id_idioma,
        titulo_pelicula: item.pelicula?.titulo_espanol || "",
        nombre_idioma: item.idioma?.nombre || ""
      }
    : null;
};

exports.create = async (data) => {
  return await PeliculaIdioma.create(data);
};

exports.update = async (id_pelicula, id_idioma, data) => {
  const item = await PeliculaIdioma.findOne({ where: { id_pelicula, id_idioma } });
  if (!item) throw new Error("No encontrado");
  return await item.update(data);
};

exports.remove = async (id_pelicula, id_idioma) => {
  await PeliculaIdioma.destroy({ where: { id_pelicula, id_idioma } });
};
