module.exports = (sequelize, DataTypes) => {
  const PeliculaDirector = sequelize.define("pelicula_director", {
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_director: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    tableName: "pelicula_director",
    timestamps: false
  });

  return PeliculaDirector;
};
