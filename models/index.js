const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");

// 💡 Aquí activamos SSL para Render
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // permite certificados autofirmados
    }
  },
  pool: dbConfig.pool,
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.Pelicula = require("./pelicula.model")(sequelize, DataTypes);
db.Actor = require("./actor.model")(sequelize, DataTypes);
db.Director = require("./director.model")(sequelize, DataTypes);
db.Compania = require("./compania.model")(sequelize, DataTypes);
db.Genero = require("./genero.model")(sequelize, DataTypes);
db.Idioma = require("./idioma.model")(sequelize, DataTypes);

db.PeliculaActor = require("./pelicula_actor.model")(sequelize, DataTypes);
db.PeliculaDirector = require("./pelicula_director.model")(sequelize, DataTypes);
db.PeliculaCompania = require("./pelicula_compania.model")(sequelize, DataTypes);
db.PeliculaGenero = require("./pelicula_genero.model")(sequelize, DataTypes);
db.PeliculaIdioma = require("./pelicula_idioma.model")(sequelize, DataTypes);

//
// RELACIONES
//

// Pelicula - Actor (Muchos a muchos)
db.Pelicula.belongsToMany(db.Actor, {
  through: db.PeliculaActor,
  foreignKey: "id_pelicula",
  otherKey: "id_actor"
});
db.Actor.belongsToMany(db.Pelicula, {
  through: db.PeliculaActor,
  foreignKey: "id_actor",
  otherKey: "id_pelicula"
});

// Pelicula - Director
db.Pelicula.belongsToMany(db.Director, {
  through: db.PeliculaDirector,
  foreignKey: "id_pelicula",
  otherKey: "id_director"
});
db.Director.belongsToMany(db.Pelicula, {
  through: db.PeliculaDirector,
  foreignKey: "id_director",
  otherKey: "id_pelicula"
});

// Pelicula - Compania
db.Pelicula.belongsToMany(db.Compania, {
  through: db.PeliculaCompania,
  foreignKey: "id_pelicula",
  otherKey: "id_compania"
});
db.Compania.belongsToMany(db.Pelicula, {
  through: db.PeliculaCompania,
  foreignKey: "id_compania",
  otherKey: "id_pelicula"
});

// Pelicula - Genero
db.Pelicula.belongsToMany(db.Genero, {
  through: db.PeliculaGenero,
  foreignKey: "id_pelicula",
  otherKey: "id_genero"
});
db.Genero.belongsToMany(db.Pelicula, {
  through: db.PeliculaGenero,
  foreignKey: "id_genero",
  otherKey: "id_pelicula"
});

// Pelicula - Idioma
db.Pelicula.belongsToMany(db.Idioma, {
  through: db.PeliculaIdioma,
  foreignKey: "id_pelicula",
  otherKey: "id_idioma"
});
db.Idioma.belongsToMany(db.Pelicula, {
  through: db.PeliculaIdioma,
  foreignKey: "id_idioma",
  otherKey: "id_pelicula"
});

module.exports = db;
