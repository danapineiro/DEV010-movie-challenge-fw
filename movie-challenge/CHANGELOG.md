## <3> - <2023-12-05>

### Sprint learnings

Los aprendizajes del sprint fueron:

- Conceptos básicos de react.
- Cómo hacer una paginación.
- Saber leer los errores desde inspecionar.

### Added

Las funcionalides agregadas: La paginación.

### Changed

Solo se le hicieron cambios a la paginación, que agregue los botones de prev y next.
También se le agregó una condición a la función handlePageChange para que cuando la persona escriba en el search input se mantenga esa busqueda (search) y solo si la persona no escribe nada agregue e catalogo de la pelicula (discover).

### Fixed

Los _bugs_ solucionados: 
- Cuando agregaba el catalogo de peliculas al array vacio del useEffect mi página se renderizaba miles de veces, al punto que mi computador no raccionaba, se solucionó agregando dos useEffect uno para el catalogo con el array vacio y uno para el performSearch y en este se dejó el estado de movie.name para que cuando el usuario busque la pelicula por nombre cambié.

- Otro problema fue que cuando agregué la paginación de creaban miles de botones cuando habian de muchas peliculas, entonces me tocó analizar bien que estaba sucediendo, y ya luego lo que hice fue agregar funcionalidad especifica por ejemplo: que solo mostrará botones hasta la pag 5 y conforme fuese pasando se fuese actualizando.

- Cuando la persona buscaba una pelicula y luego borraba las busqueda se quedaba en search pero con info vacia de peliculas, me tocó inspeccionar y ver como cambiaba el estado dentro de la consola y cuando se hacía la petición me di cuenta que se quedaba como si estuviese la persona buscando, fui a revisar la función de search y se estaba llamando a performSearch y no al catalogo de peliculas, por esa razón se quedaba vacio, solo cambié la condición de que si la persona le daba enter volvierá al catalogo de peliculas y no se quedará en vacio.


### Removed

Por ahora no hay funcionalidades eliminadas.
