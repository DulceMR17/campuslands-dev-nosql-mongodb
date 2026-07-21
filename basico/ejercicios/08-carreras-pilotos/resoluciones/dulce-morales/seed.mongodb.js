// SEED: Ranking de Pilotos de Carreras

use("campus_carreras_pilotos");

// Inserción de documentos iniciales coherentes
db.pilotos.insertMany([
  {
    nombre_completo: "Lewis Hamilton",
    codigo_piloto: "HAM44",
    categoria: "Fórmula 1",
    activo: true,
    escuderia: {
      nombre: "Mercedes-AMG",
      motor: "Mercedes",
      pais: "Alemania"
    },
    estadisticas: {
      puntos_totales: 380,
      carreras_ganadas: 8,
      podios: 15,
      mejor_tiempo_vuelta: "1:18.452"
    },
    etiquetas: ["veterano", "campeon", "leyenda"]
  },
  {
    nombre_completo: "Max Verstappen",
    codigo_piloto: "VER1",
    categoria: "Fórmula 1",
    activo: true,
    escuderia: {
      nombre: "Red Bull Racing",
      motor: "Honda RBPT",
      pais: "Austria"
    },
    estadisticas: {
      puntos_totales: 425,
      carreras_ganadas: 12,
      podios: 18,
      mejor_tiempo_vuelta: "1:17.901"
    },
    etiquetas: ["agresivo", "lider", "campeon"]
  },
  {
    nombre_completo: "Charles Leclerc",
    codigo_piloto: "LEC16",
    categoria: "Fórmula 1",
    activo: true,
    escuderia: {
      nombre: "Scuderia Ferrari",
      motor: "Ferrari",
      pais: "Italia"
    },
    estadisticas: {
      puntos_totales: 295,
      carreras_ganadas: 3,
      podios: 11,
      mejor_tiempo_vuelta: "1:18.120"
    },
    etiquetas: ["poleman", "talentoso"]
  },
  {
    nombre_completo: "Lando Norris",
    codigo_piloto: "NOR4",
    categoria: "Fórmula 1",
    activo: true,
    escuderia: {
      nombre: "McLaren",
      motor: "Mercedes",
      pais: "Reino Unido"
    },
    estadisticas: {
      puntos_totales: 310,
      carreras_ganadas: 4,
      podios: 13,
      mejor_tiempo_vuelta: "1:18.305"
    },
    etiquetas: ["consistente", "proyeccion"]
  },
  {
    nombre_completo: "Fernando Alonso",
    codigo_piloto: "ALO14",
    categoria: "Fórmula 1",
    activo: true,
    escuderia: {
      nombre: "Aston Martin",
      motor: "Mercedes",
      pais: "Reino Unido"
    },
    estadisticas: {
      puntos_totales: 205,
      carreras_ganadas: 0,
      podios: 5,
      mejor_tiempo_vuelta: "1:18.890"
    },
    etiquetas: ["experiencia", "veterano"]
  }
]);

