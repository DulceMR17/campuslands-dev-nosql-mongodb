# Solución MongoDB: Ranking de Kickboxing

## Decisiones de Diseño;
1. **Colección Principal**: Se creó la colección `luchadores` siguiendo los estándares de campus.
2. **Subdocumentos Embebidos**: 
   - Se embebió el objeto `estadisticas` (`peleas_ganadas`, `peleas_perdidas`, `nocauts`, `puntos_ranking`) ya que estos datos se consultan y leen juntos de forma frecuente al evaluar el rendimiento del luchador.
   - Se embebió la información de `categoria_peso` (`division` y `peso_kg`) para mantener la cohesión del documento sin recurrir a relaciones innecesarias.
3. **Arrays**: Se utilizó un array de strings para las `tecnicas_especiales` de cada luchador, facilitando consultas puntuales.

