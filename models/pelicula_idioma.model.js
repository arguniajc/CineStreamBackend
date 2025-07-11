module.exports = (sequelize, DataTypes) => {
  const PeliculaIdioma = sequelize.define("pelicula_idioma", {
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_idioma: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    tableName: "pelicula_idioma",
    timestamps: false
  });

  return PeliculaIdioma;
};
