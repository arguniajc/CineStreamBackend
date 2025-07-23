module.exports = (sequelize, DataTypes) => {
  // Definición del modelo Genero
  const Genero = sequelize.define("genero", {
    // ID único del género (clave primaria, autoincremental)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // Nombre del género (por ejemplo: Acción, Comedia)
    nombre: {
      type: DataTypes.STRING(100)
    }
  }, {
    // Nombre explícito de la tabla en la base de datos
    tableName: "generos",
    // No usar columnas createdAt / updatedAt
    timestamps: false
  });

  // Relación muchos a muchos con Pelicula
  Genero.associate = (models) => {
    Genero.belongsToMany(models.Pelicula, {
      through: models.PeliculaGenero,
      foreignKey: "id_genero",
      otherKey: "id_pelicula",
      as: "peliculas"
    });
  };

  return Genero;
};
