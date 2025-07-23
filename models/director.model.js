module.exports = (sequelize, DataTypes) => {
  // Definición del modelo Director
  const Director = sequelize.define("director", {
    // ID único del director (clave primaria, autoincremental)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // Nombre del director
    nombre: {
      type: DataTypes.STRING(255)
    },
    // URL de la imagen del director
    imagen_url: {
      type: DataTypes.TEXT
    }
  }, {
    // Nombre explícito de la tabla en la base de datos
    tableName: "directores",
    // No usar columnas createdAt / updatedAt
    timestamps: false
  });

  // Relación muchos a muchos con Pelicula
  Director.associate = (models) => {
    Director.belongsToMany(models.Pelicula, {
      through: models.PeliculaDirector,
      foreignKey: "id_director",
      otherKey: "id_pelicula",
      as: "peliculas"
    });
  };

  return Director;
};
