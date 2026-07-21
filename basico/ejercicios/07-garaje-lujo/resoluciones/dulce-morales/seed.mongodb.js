// Script de Inserción (Seed) - Garaje de Lujo

//Creacion de base de datos 
use("campus_garaje_lujo");

// Insercion de documentos coherentes
db.autos.insertMany([
  {
    marca: "Bugatti",
    modelo: "Chiron Super Sport",
    anio: 2023,
    precio_usd: 3820000,
    kilometraje: 1200,
    especificaciones: {
      motor: "8.0L W16 Quad-Turbo",
      caballos_fuerza: 1600,
      transmision: "Automática de 7 velocidades"
    },
    extras: ["Fibra de carbono expuesta", "Sistema de audio Accuton", "Modo Top Speed"],
    disponible: true
  },
  {
    marca: "Rolls-Royce",
    modelo: "Phantom",
    anio: 2022,
    precio_usd: 460000,
    kilometraje: 5000,
    especificaciones: {
      motor: "6.75L V12 Twin-Turbo",
      caballos_fuerza: 563,
      transmision: "Automática de 8 velocidades"
    },
    extras: ["Cielo estrellado Starlight", "Carrocería bitono", "Mesas de picnic de madera"],
    disponible: true
  },
  {
    marca: "Ferrari",
    modelo: "SF90 Stradale",
    anio: 2023,
    precio_usd: 516000,
    kilometraje: 800,
    especificaciones: {
      motor: "4.0L V8 Twin-Turbo + 3 Motores Eléctricos",
      caballos_fuerza: 1000,
      transmision: "Automática F1 de doble embrague"
    },
    extras: ["Paquete aerodinámico Assetto Fiorano", "Llantas de fibra de carbono", "Frenos carbonocerámicos"],
    disponible: false
  },
  {
    marca: "Lamborghini",
    modelo: "Aventador SVJ",
    anio: 2021,
    precio_usd: 650000,
    kilometraje: 3500,
    especificaciones: {
      motor: "6.5L V12 Atmosférico",
      caballos_fuerza: 770,
      transmision: "ISR de 7 velocidades"
    },
    extras: ["Pintura Verde Alceo", "Sistema de telemetría", "Escape deportivo Akrapovic"],
    disponible: true
  },
  {
    marca: "Aston Martin",
    modelo: "DBS Superleggera",
    anio: 2022,
    precio_usd: 330000,
    kilometraje: 6200,
    especificaciones: {
      motor: "5.2L V12 Twin-Turbo",
      caballos_fuerza: 715,
      transmision: "Automática ZF de 8 velocidades"
    },
    extras: ["Interior de cuero Q by Aston Martin", "Audio Bang & Olufsen", "Frenos cerámicos"],
    disponible: true
  }
]);
