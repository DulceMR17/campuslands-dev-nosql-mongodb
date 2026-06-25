// Asegura uso de la base de datos correcta
use('campus_liga_futbol');

// --- OPERADORES DE CONSULTA, PROYECCION Y ORDENAMIENTO (READ) ---

// Consulta 1: Proyeccion simple - Mostrar solo nombre, ciudad y DT de los equippos activos (ocultando el _id)
db.equipos.find({ activo: true }, { nombre: 1, city: 1, director_tecnico: 1, _id: 0});

// Consulta 2: Ordenamiento de Tabla de posiciones - Mostrar todos los equipos ordenados de mayor a menor puntaje
db.equipos.find().sort({ "estadisticas_temporada.puntos_totales": -1 });

// Consulta 3: Filtrar por subdocumento anidado - Buscar equipos con poder ofensivo alto 
db.equipos.find({ "estadisticas_temporada.puntos_totales": -1 });

// Consulta 4: Buscar que equipos tienen al jugador estrella "Rodriguez" en su array de figuras 
db.equipos.find({ "jugadores_estrella": "Rodriguez"});

// --- OPERACION DE ACTUALIZACION (UPDATE) ---

// Actualizacion: El equipo 'F.C Campus' gano su partido; se le suma 1 partido jugado, 3 puntos y 2 goles a favor
db.equipos.updateOne(
    { nombre: "F.C Campus" },
    {
        $inc: {
            "estadisticas_temporada.partidos_jugados": 1,
            "estadisticas_temporada.puntos_totales": 3,
            "estadisticas_temporada.goles_a_favor": 2
        }
    }  
);

