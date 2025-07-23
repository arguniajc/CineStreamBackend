// insertarSinDuplicados.js
// dfs: Inserta registros únicos en base de datos usando un campo clave. 
// Filtra, limpia, evita duplicados y retorna los nuevos insertados.

module.exports = async function insertarSinDuplicados(Modelo, campoUnico, data) {
  const listaOriginal = Array.isArray(data) ? data : [data];

  // Validar y limpiar
  const listaValida = listaOriginal
    .map(e => {
      const valor = e[campoUnico];
      if (typeof valor !== "string") return null;
      const limpio = valor.trim();
      if (limpio === "") return null;
      return { ...e, [campoUnico]: limpio };
    })
    .filter(e => e !== null);

  if (listaValida.length === 0) {
    throw new Error(`Debe incluir al menos un ${campoUnico} válido.`);
  }

  const valores = listaValida.map(e => e[campoUnico]);

  // Buscar existentes
  const existentes = await Modelo.findAll({
    where: { [campoUnico]: valores }
  });
  const yaExistentes = existentes.map(e => e[campoUnico]);

  // Filtrar nuevos
  const nuevos = listaValida.filter(e => !yaExistentes.includes(e[campoUnico]));

  const insertados = nuevos.length > 0 ? await Modelo.bulkCreate(nuevos) : [];

  // Retorno según entrada
  if (!Array.isArray(data)) {
    const original = data[campoUnico]?.trim();
    if (yaExistentes.includes(original)) {
      throw new Error(`El ${campoUnico} "${original}" ya está registrado.`);
    }
    return insertados[0];
  }

  return {
    insertados,
    omitidos: yaExistentes
  };
};
