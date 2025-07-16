const db = require("../models");
const PeliculaCompania = db.PeliculaCompania;
const Pelicula = db.Pelicula;
const Compania = db.Compania;

exports.findAll = async () => {
  const data = await PeliculaCompania.findAll({
    include: [
      { model: Pelicula, as: "pelicula", attributes: ["titulo_espanol"] },
      { model: Compania, as: "compania", attributes: ["nombre", "logo_url"] }
    ]
  });

  return data.map(item => ({
    id_pelicula: item.id_pelicula,
    id_compania: item.id_compania,
    titulo_pelicula: item.pelicula?.titulo_espanol || "",
    nombre_compania: item.compania?.nombre || "",
    logo_compania: item.compania?.logo_url || ""
  }));
};

exports.findOne = async (id_pelicula, id_compania) => {
  const item = await PeliculaCompania.findOne({
    where: { id_pelicula, id_compania },
    include: [
      { model: Pelicula, as: "pelicula", attributes: ["titulo_espanol"] },
      { model: Compania, as: "compania", attributes: ["nombre", "logo_url"] }
    ]
  });

  if (!item) return null;

  return {
    id_pelicula: item.id_pelicula,
    id_compania: item.id_compania,
    titulo_pelicula: item.pelicula?.titulo_espanol || "",
    nombre_compania: item.compania?.nombre || "",
    logo_compania: item.compania?.logo_url || ""
  };
};

exports.create = async (data) => {
  return await PeliculaCompania.create(data);
};

exports.update = async (id_pelicula, id_compania, data) => {
  const item = await PeliculaCompania.findOne({ where: { id_pelicula, id_compania } });
  if (!item) throw new Error("No encontrado");
  return await item.update(data);
};

exports.remove = async (id_pelicula, id_compania) => {
  await PeliculaCompania.destroy({ where: { id_pelicula, id_compania } });
};
