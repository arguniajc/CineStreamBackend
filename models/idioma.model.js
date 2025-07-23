module.exports = (sequelize, DataTypes) => {
  // Definición del modelo Idioma
  const Idioma = sequelize.define("idioma", {
    // ID único del idioma (clave primaria, autoincremental)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // Nombre del idioma (ejemplo: Español, Inglés)
    nombre: {
      type: DataTypes.STRING(100)
    }
  }, {
    // Nombre de la tabla en la base de datos
    tableName: "idiomas",
    // Desactivar columnas createdAt y updatedAt
    timestamps: false
  });

  // Relación muchos a muchos con Pelicula
  Idioma.associate = (models) => {
    Idioma.belongsToMany(models.Pelicula, {
      through: models.PeliculaIdioma,
      foreignKey: "id_idioma",
      otherKey: "id_pelicula",
      as: "peliculas"
    });
  };

  return Idioma;
};
