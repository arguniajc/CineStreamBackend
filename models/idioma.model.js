module.exports = (sequelize, DataTypes) => {
  const Idioma = sequelize.define("idioma", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(100)
    }
  }, {
    tableName: "idiomas",
    timestamps: false
  });

  return Idioma;
};
