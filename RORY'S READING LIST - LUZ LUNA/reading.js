var libros = [
    { titulo: "Pride and Prejudice", autor: "Jane Austen", estado: "por-leer" },
    { titulo: "Jane Eyre", autor: "Charlotte Bronte", estado: "por-leer" },
    { titulo: "Little Women", autor: "Louisa May Alcott", estado: "leidos" },
    { titulo: "Emma", autor: "Jane Austen", estado: "por-leer" },
    { titulo: "Moby Dick", autor: "Herman Melville", estado: "leidos" },
    { titulo: "Ulysses", autor: "James Joyce", estado: "leyendo" },
    { titulo: "Alicia en el pais de las maravillas", autor: "Lewis Carroll", estado: "leidos" },
    { titulo: "El conde de Montecristo", autor: "Alexandre Dumas", estado: "por-leer" },
    { titulo: "The Great Gatsby", autor: "F. Scott. Fitzgerald", estado: "leyendo" },
    { titulo: "El diario de Ana Frank", autor: "Ana Frank", estado: "leyendo" },
    { titulo: "Cancion de Navidad", autor: "Charles Dickens", estado: "por-leer" },
    { titulo: "1984", autor: "George Orwell", estado: "por-leer" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", estado: "leidos" },
    { titulo: "Frankenstein", autor: "Mary Shelley", estado: "leidos" },
    { titulo: "Cuentos de Poe", autor: "Edgar Allan Poe", estado: "leyendo" }
];

function dibujar() {
    var htmlPorLeer = "";
    var htmlLeyendo = "";
    var htmlLeidos = "";

    for (var indice = 0; indice < libros.length; indice++) {
        var libroActual = libros[indice];

        var selPorLeer = "";
        var selLeyendo = "";
        var selLeidos = "";

        if (libroActual.estado == "por-leer") {
            selPorLeer = "selected";
        } else if (libroActual.estado == "leyendo") {
            selLeyendo = "selected";
        } else {
            selLeidos = "selected";
        }

        // Armamos el ítem con el selector y el botón de cambiar (sin botón de borrar)
        var item = "<li>" + libroActual.titulo + " - " + libroActual.autor + 
        " <select id=\"select-" + indice + "\">" +
        "<option value=\"por-leer\" " + selPorLeer + ">Por Leer</option>" +
        "<option value=\"leyendo\" " + selLeyendo + ">Leyendo</option>" +
        "<option value=\"leidos\" " + selLeidos + ">Leidos</option>" +
        "</select>" +
        " <button class=\"boton\" type=\"button\" onclick=\"actualizarEstado(" + indice + ")\">Cambiar</button>" +
        "</li>";

        if (libroActual.estado == "por-leer") {
            htmlPorLeer = htmlPorLeer + item;
        } else if (libroActual.estado == "leyendo") {
            htmlLeyendo = htmlLeyendo + item;
        } else { 
            htmlLeidos = htmlLeidos + item;
        }
    }
    
    document.getElementById("lista-por-leer").innerHTML = htmlPorLeer;
    document.getElementById("lista-leyendo").innerHTML = htmlLeyendo;
    document.getElementById("lista-leidos").innerHTML = htmlLeidos;
}

// Función para actualizar el estado leyendo el valor del select con getElementById y .value
function actualizarEstado(indiceLibro) {
    var selectElegido = document.getElementById("select-" + indiceLibro);
    var nuevoEstado = selectElegido.value;
    
    libros[indiceLibro].estado = nuevoEstado;
    dibujar();
}

function agregarLibro(tituloIngresado, autorIngresado, estadoIngresado) {
    libros.push({
        titulo: tituloIngresado,
        autor: autorIngresado,
        estado: estadoIngresado
    });
    dibujar();
}

dibujar();