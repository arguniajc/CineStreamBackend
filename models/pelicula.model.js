module.exports = (sequelize, DataTypes) => {
  const Pelicula = sequelize.define("Pelicula", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titulo_espanol: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    titulo_original: {
      type: DataTypes.STRING(255),
    },
    ano_estreno: {
      type: DataTypes.INTEGER,
    },
    pais: {
      type: DataTypes.STRING(100),
    },
    duracion: {
      type: DataTypes.INTEGER,
    },
    sinopsis: {
      type: DataTypes.TEXT,
    },
    trailer_url: {
      type: DataTypes.TEXT,
    },
    imagen_portada: {
      type: DataTypes.TEXT,
    },
    calificacion: {
      type: DataTypes.DECIMAL(2, 1),
    },
    fecha_estreno: {
      type: DataTypes.DATEONLY,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
    }
  }, {
    tableName: "peliculas",
    timestamps: false
  });

  return Pelicula;
};
