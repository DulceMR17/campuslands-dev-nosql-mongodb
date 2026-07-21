// QUERIES Y ACTUALIZACIONES: Ranking de Pilotos

use("campus_carreras_pilotos");

// Consulta 1: Top 3 de la clasificación general 

db.pilotos.find(
  { activo: true },
  { nombre_completo: 1, "escuderia.nombre": 1, "estadisticas.puntos_totales": 1, _id: 0 }
)
.sort({ "estadisticas.puntos_totales": -1 })
.limit(3);

// Consulta 2: Filtrar pilotos con más de 5 carreras ganadas
db.pilotos.find(
  { "estadisticas.carreras_ganadas": { $gt: 5 } },
  { nombre_completo: 1, "estadisticas.carreras_ganadas": 1, _id: 0 }
);

// Operación de Actualización: Registrar victoria y actualizar puntos 
db.pilotos.updateOne(
  { codigo_piloto: "VER1" },
  { 
    $inc: { 
      "estadisticas.puntos_totales": 25, 
      "estadisticas.carreras_ganadas": 1, 
      "estadisticas.podios": 1 
    } 
  }
);

// Verificación de la actualización
db.pilotos.find(
  { codigo_piloto: "VER1" },
  { nombre_completo: 1, "estadisticas": 1, _id: 0 }
);
