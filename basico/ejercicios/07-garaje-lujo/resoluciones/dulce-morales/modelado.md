# Solución MongoDB: Garaje de Autos de Lujo

## Decisiones de Diseño
- **Colección Principal**: Se utiliza `autos` haciendo referencia a lo que contiene.
- **Embebidaje**: 
  - Las especificaciones técnicasq (`motor`, `transmision`, `caballos_fuerza`) se embeben directamente porque se consultan siempre junto con el vehículo.
  - Las características o extras opcionales (`extras`) se manejan en un array de strings para búsquedas rápidas.
- **Criterio de evaluación**: Se priorizan consultas directas con `.find()`, operadores de comparación numéricos (`$gt`, `$lte`), proyecciones y modificaciones puntuales con `$set` e `$inc`.