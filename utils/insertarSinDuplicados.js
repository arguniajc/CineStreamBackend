module.exports = async function insertarSinDuplicados(Modelo, campoUnico, data) {
  const listaOriginal = Array.isArray(data) ? data : [data];

  // Limpiar espacios al inicio y final, validar que el campo tenga contenido
  const listaValida = listaOriginal
    .map(e => {
      const valor = e[campoUnico];

      // Si no es string, descartamos
      if (typeof valor !== "string") return null;

      const limpio = valor.trim();

      // Si después de limpiar está vacío, descartamos
      if (limpio === "") return null;

      // Retornamos el objeto con el campo limpio
      return { ...e, [campoUnico]: limpio };
    })
    .filter(e => e !== null); // Eliminar los inválidos

  if (listaValida.length === 0) {
    throw new Error(`Debe incluir al menos un ${campoUnico} válido.`);
  }

  const valores = listaValida.map(e => e[campoUnico]);

  // Consultar los existentes en BD
  const existentes = await Modelo.findAll({
    where: { [campoUnico]: valores }
  });
  const yaExistentes = existentes.map(e => e[campoUnico]);

  // Filtrar los que no están repetidos
  const nuevos = listaValida.filter(e => !yaExistentes.includes(e[campoUnico]));

  // Insertar nuevos si hay
  const insertados = nuevos.length > 0 ? await Modelo.bulkCreate(nuevos) : [];

  // Si fue una sola entidad (no array)
  if (!Array.isArray(data)) {
    const original = data[campoUnico]?.trim();
    if (yaExistentes.includes(original)) {
      throw new Error(`El ${campoUnico} "${original}" ya está registrado.`);
    }
    return insertados[0];
  }

  // Si fue un array, devolver respuesta compuesta
  return {
    insertados,
    omitidos: yaExistentes
  };
};
