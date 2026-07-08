# Modelo documental

### Colecciones
*   **`registros`**: Colección principal de tipo plano que almacena las sesiones, modalidades o perfiles de juego. Se eligió un diseño basado en documentos para mantener lecturas rápidas y de baja latencia, evitando realizar operaciones de unión innecesarias.

### Documentos
Cada documento representa una entidad independiente que registra el rendimiento del jugador en una modalidad específica del shooter. La estructura clave-valor permite flexibilidad en caso de que ciertos modos de juego requieran campos adicionales en el futuro.

### Subdocumentos y Arrays
*   **`etiquetas` (Array de Strings)**: Se utilizó un arreglo nativo para almacenar las características y descriptores de cada partida (ej. `["multijugador", "ranked"]`). Los arrays los utilice para evitar crear una colección relacional intermedia de "etiquetas".

