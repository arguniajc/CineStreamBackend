module.exports = (sequelize, DataTypes) => {
  const PeliculaIdioma = sequelize.define("pelicula_idioma", {
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    id_idioma: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
    tableName: "pelicula_idioma", 
    timestamps: false
  });

  return PeliculaIdioma;
};
