const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
const actorRoutes = require("./routes/actor.routes");
app.use("/api/actores", actorRoutes);

const directorRoutes = require("./routes/director.routes");
app.use("/api/directores", directorRoutes);

const peliculaRoutes = require("./routes/pelicula.routes");
app.use("/api/peliculas", peliculaRoutes);

// Sincronización de base de datos
db.sequelize.sync().then(() => {
  console.log("Base de datos sincronizada");
});

module.exports = app;
