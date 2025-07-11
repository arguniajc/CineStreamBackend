const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// Importar rutas
const peliculaRoutes = require("./routes/pelicula.routes");
app.use("/api/peliculas", peliculaRoutes);

const actorRoutes = require("./routes/actor.routes");
app.use("/api/actores", actorRoutes);


// Sincronizar la base de datos
db.sequelize.sync().then(() => {
  console.log("Base de datos sincronizada");
});

module.exports = app;
