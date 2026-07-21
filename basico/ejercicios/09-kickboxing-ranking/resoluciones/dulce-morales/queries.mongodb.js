
// QUERIES: Validaciones y Consultas

use("campus_kickboxing_ranking");

// Consulta 1: Buscar luchadores activos con puntaje en el ranking sea mayor a 1500

db.luchadores.find(
  {
    $and: [
      { activo: true },
      { "estadisticas.puntos_ranking": { $gt: 1500 } }
    ]
  },
  { alias: 1, "categoria_peso.division": 1, "estadisticas.puntos_ranking": 1, _id: 0 }
).sort({ "estadisticas.puntos_ranking": -1 });

// Consulta 2: Buscar luchadores que pertenezcan al 'Peso Welter' o tengan más de 12 nocauts

db.luchadores.find(
  {
    $or: [
      { "categoria_peso.division": "Peso Welter" },
      { "estadisticas.nocauts": { $gt: 12 } }
    ]
  },
  { alias: 1, "categoria_peso.division": 1, "estadisticas.nocauts": 1, _id: 0 }
);

// Operación de Actualización: Incrementar victorias en 1, nocauts en 1, puntos de ranking en 50  y actualizar el estado a activo para el luchador "The Viper"

db.luchadores.updateOne(
  { alias: "The Viper" },
  {
    $set: { activo: true },$inc: {
      "estadisticas.peleas_ganadas": 1,
      "estadisticas.nocauts": 1,
      "estadisticas.puntos_ranking": 50
    }
  }
);

// Comprobación de la actualización

db.luchadores.find(
  { alias: "The Viper" },
  { alias: 1, activo: 1, estadisticas: 1, _id: 0 }
);
