require("dotenv").config(); 
const app = require("./app");
const PORT = process.env.PORT || 3000;

console.log("🔧 Dialecto cargado desde .env:", process.env.DB_DIALECT);

app.listen(PORT, () => {
  console.log(`✅ Servidor ejecutándose en http://localhost:${PORT}`);
});
