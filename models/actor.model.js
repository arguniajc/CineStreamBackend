module.exports = (sequelize, DataTypes) => {
  // Definición del modelo Actor
  const Actor = sequelize.define("Actor", {
    // ID único del actor (clave primaria, autoincremental)
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // Nombre del actor (obligatorio)
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // URL de la imagen del actor (opcional)
    imagen_url: {
      type: DataTypes.STRING
    }
  }, {
    // Nombre de la tabla en la base de datos
    tableName: "actores",
    // Desactiva timestamps (createdAt, updatedAt)
    timestamps: false
  });

  // Relación muchos a muchos con Pelicula
  Actor.associate = (models) => {
    Actor.belongsToMany(models.Pelicula, {
      through: models.PeliculaActor,
      foreignKey: "id_actor",
      otherKey: "id_pelicula",
      as: "peliculas"
    });
  };

  return Actor;
};
