module.exports = (sequelize, DataTypes) => {
  const Pelicula = sequelize.define("pelicula", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo_espanol: {
      type: DataTypes.STRING(255)
    },
    titulo_original: {
      type: DataTypes.STRING(255)
    },
    ano_estreno: {
      type: DataTypes.INTEGER
    },
    pais: {
      type: DataTypes.STRING(100)
    },
    duracion: {
      type: DataTypes.INTEGER
    },
    sinopsis: {
      type: DataTypes.TEXT
    },
    trailer_url: {
      type: DataTypes.TEXT
    },
    imagen_portada: {
      type: DataTypes.TEXT
    },
    calificacion: {
      type: DataTypes.DECIMAL(2, 1)
    },
    fecha_estreno: {
      type: DataTypes.DATE
    },
    fecha_creacion: {
      type: DataTypes.DATE
    }
  }, {
    tableName: "peliculas",
    timestamps: false
  });

  return Pelicula;
};
