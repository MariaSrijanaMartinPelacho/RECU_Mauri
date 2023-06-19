/**
 * Clase que representa un libro.
 */
class Libro {
    /**
     * Crea una instancia de la clase Libro.
     * @param {string} titulo - El título del libro.
     * @param {string} autor - El autor del libro.
     * @param {number} anioPublicacion - El año de publicación del libro.
     */
    constructor(titulo, autor, anioPublicacion) {
      this.titulo = titulo;
      this.autor = autor;
      this.anioPublicacion = anioPublicacion;
      this.prestado = false;
      this.usuarioPrestamo = null;
      this.fechaPrestamo = null;
      this.fechaDevolucion = null;
    }
  
    /**
     * Obtiene la información del libro.
     * @returns {string} - La información del libro.
     */
    obtenerInformacion() {
      let informacion = `Título: ${this.titulo}\n`;
      informacion += `Autor: ${this.autor}\n`;
      informacion += `Año de publicación: ${this.anioPublicacion}\n`;
      informacion += `Disponibilidad: ${this.prestado ? 'Prestado' : 'Disponible'}`;
      if (this.prestado) {
        informacion += `\nUsuario de préstamo: ${this.usuarioPrestamo}`;
        informacion += `\nFecha de préstamo: ${this.fechaPrestamo}`;
        informacion += `\nFecha de devolución: ${this.fechaDevolucion}`;
      }
      return informacion;
    }
  }
  
  /**
   * Clase que representa una biblioteca.
   */
  class Biblioteca {
    /**
     * Crea una instancia de la clase Biblioteca.
     */
    constructor() {
      this.libros = [];
    }
  
    /**
     * Agrega un libro a la biblioteca.
     * @param {string} titulo - El título del libro.
     * @param {string} autor - El autor del libro.
     * @param {number} anioPublicacion - El año de publicación del libro.
     * @returns {void}
     */
    agregarLibro(titulo, autor, anioPublicacion) {
      const libro = new Libro(titulo, autor, anioPublicacion);
      this.libros.push(libro);
    }
  
    /**
     * Busca libros por título.
     * @param {string} titulo - El título del libro a buscar.
     * @returns {Array} - Un array de libros que coinciden con el título.
     */
    buscarPorTitulo(titulo) {
      return this.libros.filter(libro => libro.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }
  
    /**
     * Presta un libro a un usuario.
     * @param {Libro} libro - El libro a prestar.
     * @param {string} usuario - El nombre del usuario que solicita el préstamo.
     * @returns {void}
     */
    prestarLibro(libro, usuario) {
      if (!libro.prestado) {
        libro.prestado = true;
        libro.usuarioPrestamo = usuario;
        libro.fechaPrestamo = new Date();
      }
    }
  
    /**
     * Devuelve un libro prestado.
     * @param {Libro} libro - El libro a devolver.
     * @returns {void}
     */
    devolverLibro(libro) {
      if (libro.prestado) {
        libro.prestado = false;
        libro.usuarioPrestamo = null;
        libro.fechaDevolucion = new Date();
      }
    }
  
    /**
     * Obtiene la lista de todos los libros en la biblioteca.
     * @returns {Array} - Un array de todos los libros en la biblioteca.
     */
    obtenerListaLibros() {
      return this.libros.map(libro => ({
        titulo: libro.titulo,
        autor: libro.autor,
        anioPublicacion: libro.anioPublicacion,
        prestado: libro.prestado,
        usuarioPrestamo: libro.usuarioPrestamo,
      }));
    }
  }
  
  // Ejemplo de uso del programa
  
  const biblioteca = new Biblioteca();
  
  // Agregar libros
  biblioteca.agregarLibro("Cien años de soledad", "Gabriel García Márquez", 1967);
  biblioteca.agregarLibro("1984", "George Orwell", 1949);
  biblioteca.agregarLibro("Don Quijote de la Mancha", "Miguel de Cervantes Saavedra", 1605);
  
  // Buscar libros por título
  const librosEncontrados = biblioteca.buscarPorTitulo("cien");
  console.log("Libros encontrados:");
  librosEncontrados.forEach(libro => {
    console.log(libro.obtenerInformacion());
  });
  
  // Prestar un libro
  const libroPrestado = librosEncontrados[0];
  biblioteca.prestarLibro(libroPrestado, "Usuario1");
  console.log(`El libro "${libroPrestado.titulo}" ha sido prestado a Usuario1.`);
  
  // Devolver un libro prestado
  biblioteca.devolverLibro(libroPrestado);
  console.log(`El libro "${libroPrestado.titulo}" ha sido devuelto.`);
  
  // Obtener lista de libros en la biblioteca
  const listaLibros = biblioteca.obtenerListaLibros();
  console.log("Lista de libros en la biblioteca:");
  listaLibros.forEach(libro => {
    console.log(libro.obtenerInformacion());
  });
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };
  
  