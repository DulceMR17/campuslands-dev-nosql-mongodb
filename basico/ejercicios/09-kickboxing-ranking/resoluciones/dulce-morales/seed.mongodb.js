// SEED: Ranking de Kickboxing
use("campus_kickboxing_ranking");

// Inserción de documentos iniciales coherentes
db.luchadores.insertMany([
  {
    alias: "The Panther",
    nombre_completo: "Carlos Silva",
    categoria_peso: {
      division: "Peso Welter",
      peso_kg: 67.0
    },
    activo: true,
    estadisticas: {
      peleas_ganadas: 18,
      peleas_perdidas: 2,
      nocauts: 10,
      puntos_ranking: 1550
    },
    tecnicas_especiales: ["Patada giratoria", "Crochet de izquierda", "Low kick"]
  },
  {
    alias: "Iron Fist",
    nombre_completo: "Dmitri Volkov",
    categoria_peso: {
      division: "Peso Pesado",
      peso_kg: 95.5
    },
    activo: true,
    estadisticas: {
      peleas_ganadas: 22,
      peleas_perdidas: 4,
      nocauts: 16,
      puntos_ranking: 1820
    },
    tecnicas_especiales: ["Directo de derecha", "Rodilla voladora"]
  },
  {
    alias: "Lightning",
    nombre_completo: "Kenji Sato",
    categoria_peso: {
      division: "Peso Pluma",
      peso_kg: 58.0
    },
    activo: true,
    estadisticas: {
      peleas_ganadas: 14,
      peleas_perdidas: 5,
      nocauts: 4,
      puntos_ranking: 1340
    },
    tecnicas_especiales: ["Teep rápido", "Patada alta frontal"]
  },
  {
    alias: "The Viper",
    nombre_completo: "Lucas Morales",
    categoria_peso: {
      division: "Peso Welter",
      peso_kg: 69.2
    },
    activo: false,
    estadisticas: {
      peleas_ganadas: 9,
      peleas_perdidas: 6,
      nocauts: 3,
      puntos_ranking: 980
    },
    tecnicas_especiales: ["Contraataque de puño", "Patada circular"]
  },
  {
    alias: "Destroyer",
    nombre_completo: "Marc Henderson",
    categoria_peso: {
      division: "Peso Pesado",
      peso_kg: 102.0
    },
    activo: true,
    estadisticas: {
      peleas_ganadas: 20,
      peleas_perdidas: 8,
      nocauts: 14,
      puntos_ranking: 1600
    },
    tecnicas_especiales: ["Hook al hígado", "Patada descendiente"]
  }
]);
