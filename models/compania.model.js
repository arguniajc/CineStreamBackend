module.exports = (sequelize, DataTypes) => {
  const Compania = sequelize.define("compania", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(255)
    },
    logo_url: {
      type: DataTypes.TEXT
    }
  }, {
    tableName: "companias",
    timestamps: false
  });

  return Compania;
};
