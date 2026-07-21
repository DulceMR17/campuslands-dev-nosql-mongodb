# Solución MongoDB: Ranking de Pilotos de Carreras


## Decisiones de Diseño:
- **Colección Principal**: Se utiliza `pilotos` debido al contexto siguiendo los estándares del campus.
- **Modelo de Documentos Embebidos**: 
  - Las estadísticas de rendimiento (`estadisticas`: carreras ganadas, podios, puntos totales, mejor tiempo) se embeben directamente en el documento del piloto, ya que se leen y actualizan de forma conjunta durante los fines de semana de competición.
  - La información de la escudería y vehículo actual se estructura como un subdocumento para mantener la cohesión de los datos sin requerir colecciones externas.

