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

const companiaRoutes = require("./routes/compania.routes");
app.use("/api/compania", companiaRoutes);

const peliculaRoutes = require("./routes/pelicula.routes");
app.use("/api/peliculas", peliculaRoutes);

const generoRoutes = require("./routes/genero.routes");
app.use("/api/genero", generoRoutes);

const idiomaRoutes = require("./routes/idioma.routes");
app.use("/api/idioma", idiomaRoutes);

const peliculaActorRoutes = require("./routes/pelicula_actor.route");
app.use("/api/pelicula-actor", peliculaActorRoutes);

const peliculaDirectorRoutes = require("./routes/pelicula_director.routes");
app.use("/api/pelicula_director", peliculaDirectorRoutes);

const peliculaCompaniaRoutes = require("./routes/pelicula_compania.route");
app.use("/api/pelicula-compania", peliculaCompaniaRoutes);

const peliculaIdiomaRoutes = require("./routes/pelicula_idioma.route");
app.use("/api/pelicula-idioma", peliculaIdiomaRoutes);

const peliculaGeneroRoutes = require("./routes/pelicula_genero.routes");
app.use("/api/pelicula-genero", peliculaGeneroRoutes);

// Sincroniza base de datos
db.sequelize.sync().then(() => {
  console.log("Base de datos sincronizada");
});

module.exports = app;
