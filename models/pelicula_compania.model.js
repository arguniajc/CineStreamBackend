module.exports = (sequelize, DataTypes) => {
  const PeliculaCompania = sequelize.define("pelicula_compania", {
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_compania: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    tableName: "pelicula_compania",
    timestamps: false
  });

  return PeliculaCompania;
};
