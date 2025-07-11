module.exports = (sequelize, DataTypes) => {
  const PeliculaActor = sequelize.define("pelicula_actor", {
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_actor: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    personaje: {
      type: DataTypes.STRING(255)
    }
  }, {
    tableName: "pelicula_actor",
    timestamps: false
  });

  return PeliculaActor;
};
