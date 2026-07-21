// Script de Consultas y Actualizaciones
use("campus_garaje_lujo");

// Consulta 1: Autos con un precio menor o igual a $600,000 USD

db.autos.find(
  { precio_usd: { $lte: 600000 } },
  { marca: 1, modelo: 1, precio_usd: 1, disponible: 1, _id: 0 }
).sort({ precio_usd: 1 });

// Consulta 2: Autos exclusivos con más de 900 caballos de fuerza

db.autos.find(
  { "especificaciones.caballos_fuerza": { $gt: 900 } },
  { marca: 1, modelo: 1, "especificaciones.caballos_fuerza": 1, _id: 0 }
);

// Actualiza el kilometraje e incrementa el precio por revalorización del Rolls-Royce Phantom
db.autos.updateOne(
  { modelo: "Phantom" },
  { 
    $set: { kilometraje: 5500 },
    $inc: { precio_usd: 15000 }
  }
);

// Comprobación de la actualización
db.autos.find(
  { modelo: "Phantom" },
  { marca: 1, modelo: 1, precio_usd: 1, kilometraje: 1, _id: 0 }
);
