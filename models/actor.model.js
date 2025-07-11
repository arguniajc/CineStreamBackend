module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define("Actor", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen_url: {
      type: DataTypes.STRING
    }
  }, {
    tableName: "actores", 
    timestamps: false 
  });

  return Actor;
};
