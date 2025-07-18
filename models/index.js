const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");

// =====================================
// Conexión a la base de datos con Sequelize
// =====================================
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: dbConfig.pool,
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// ==========================
// Modelos principales (entidades)
// ==========================
db.Pelicula = require("./pelicula.model")(sequelize, DataTypes);
db.Actor = require("./actor.model")(sequelize, DataTypes);
db.Director = require("./director.model")(sequelize, DataTypes);
db.Compania = require("./compania.model")(sequelize, DataTypes);
db.Genero = require("./genero.model")(sequelize, DataTypes);
db.Idioma = require("./idioma.model")(sequelize, DataTypes);

// ==========================
// Modelos intermedios (relaciones N:N)
// ==========================
db.PeliculaActor = require("./pelicula_actor.model")(sequelize, DataTypes);
db.PeliculaDirector = require("./pelicula_director.model")(sequelize, DataTypes);
db.PeliculaCompania = require("./pelicula_compania.model")(sequelize, DataTypes);
db.PeliculaGenero = require("./pelicula_genero.model")(sequelize, DataTypes);
db.PeliculaIdioma = require("./pelicula_idioma.model")(sequelize, DataTypes);

// ======================================
// Relaciones Película - Actor (N:N)
// ======================================
db.Pelicula.belongsToMany(db.Actor, {
  through: db.PeliculaActor,
  foreignKey: "id_pelicula",
  otherKey: "id_actor",
  as: "actores"
});
db.Actor.belongsToMany(db.Pelicula, {
  through: db.PeliculaActor,
  foreignKey: "id_actor",
  otherKey: "id_pelicula",
  as: "peliculas"
});
db.PeliculaActor.belongsTo(db.Pelicula, { foreignKey: "id_pelicula", as: "pelicula" });
db.PeliculaActor.belongsTo(db.Actor, { foreignKey: "id_actor", as: "actor" });

// ======================================
// Relaciones Película - Director (N:N)
// ======================================
db.Pelicula.belongsToMany(db.Director, {
  through: db.PeliculaDirector,
  foreignKey: "id_pelicula",
  otherKey: "id_director",
  as: "directores"
});
db.Director.belongsToMany(db.Pelicula, {
  through: db.PeliculaDirector,
  foreignKey: "id_director",
  otherKey: "id_pelicula",
  as: "peliculas"
});
db.PeliculaDirector.belongsTo(db.Pelicula, { foreignKey: "id_pelicula", as: "pelicula" });
db.PeliculaDirector.belongsTo(db.Director, { foreignKey: "id_director", as: "director" });

// ======================================
// Relaciones Película - Compañía (N:N)
// ======================================
db.Pelicula.belongsToMany(db.Compania, {
  through: db.PeliculaCompania,
  foreignKey: "id_pelicula",
  otherKey: "id_compania",
  as: "companias"
});
db.Compania.belongsToMany(db.Pelicula, {
  through: db.PeliculaCompania,
  foreignKey: "id_compania",
  otherKey: "id_pelicula",
  as: "peliculas"
});
db.PeliculaCompania.belongsTo(db.Pelicula, { foreignKey: "id_pelicula", as: "pelicula" });
db.PeliculaCompania.belongsTo(db.Compania, { foreignKey: "id_compania", as: "compania" });

// ======================================
// Relaciones Película - Género (N:N)
// ======================================
db.Pelicula.belongsToMany(db.Genero, {
  through: db.PeliculaGenero,
  foreignKey: "id_pelicula",
  otherKey: "id_genero",
  as: "generos"
});
db.Genero.belongsToMany(db.Pelicula, {
  through: db.PeliculaGenero,
  foreignKey: "id_genero",
  otherKey: "id_pelicula",
  as: "peliculas"
});
db.PeliculaGenero.belongsTo(db.Pelicula, { foreignKey: "id_pelicula", as: "pelicula" });
db.PeliculaGenero.belongsTo(db.Genero, { foreignKey: "id_genero", as: "genero" });

// ======================================
// Relaciones Película - Idioma (N:N)
// ======================================
db.Pelicula.belongsToMany(db.Idioma, {
  through: db.PeliculaIdioma,
  foreignKey: "id_pelicula",
  otherKey: "id_idioma",
  as: "idiomas"
});
db.Idioma.belongsToMany(db.Pelicula, {
  through: db.PeliculaIdioma,
  foreignKey: "id_idioma",
  otherKey: "id_pelicula",
  as: "peliculas"
});
db.PeliculaIdioma.belongsTo(db.Pelicula, { foreignKey: "id_pelicula", as: "pelicula" });
db.PeliculaIdioma.belongsTo(db.Idioma, { foreignKey: "id_idioma", as: "idioma" });

// Exportar db
module.exports = db;
