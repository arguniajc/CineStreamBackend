module.exports = {
  HOST: "dpg-d1nu8rbipnbc73b5mf50-a.oregon-postgres.render.com",
  USER: "bdreelstorm_ci9o_user",
  PASSWORD: "OhHzifyB04BG2FiWKg9EnUQUWz47Rzvp",
  DB: "bdreelstorm_ci9o",
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
