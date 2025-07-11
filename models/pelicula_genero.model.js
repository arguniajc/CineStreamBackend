module.exports = (sequelize, DataTypes) => {
  const PeliculaGenero = sequelize.define("pelicula_genero", {
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_genero: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    tableName: "pelicula_genero",
    timestamps: false
  });

  return PeliculaGenero;
};
