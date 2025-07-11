module.exports = (sequelize, DataTypes) => {
  const Genero = sequelize.define("genero", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(100)
    }
  }, {
    tableName: "generos",
    timestamps: false
  });

  return Genero;
};
