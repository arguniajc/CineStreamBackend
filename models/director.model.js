module.exports = (sequelize, DataTypes) => {
  const Director = sequelize.define("director", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(255)
    },
    imagen_url: {
      type: DataTypes.TEXT
    }
  }, {
    tableName: "directores",
    timestamps: false
  });

  return Director;
};
