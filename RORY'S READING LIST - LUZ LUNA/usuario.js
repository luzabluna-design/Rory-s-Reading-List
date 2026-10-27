var libros = [
    { titulo: "Pride and Prejudice", autor: "Jane Austen", estado: "por-leer" },
    { titulo: "Jane Eyre", autor: "Charlotte Bronte", estado: "por-leer" },
    { titulo: "1984", autor: "George Orwell", estado: "por-leer" },
    { titulo: "Emma", autor: "Jane Austen", estado: "por-leer" },
    { titulo: "The Great Gatsby", autor: "F. Scott Fitzgerald", estado: "leyendo" },
    { titulo: "Little Women", autor: "Louisa May Alcott", estado: "leidos" },
    { titulo: "Frankenstein", autor: "Mary Shelley", estado: "leidos" }
];

var guardados = localStorage.getItem("listaRory");
if (guardados) {
    libros = JSON.parse(guardados);
}

function guardar() {
    localStorage.setItem("listaRory", JSON.stringify(libros));
}

function dibujar() {
    document.getElementById("lista-por-leer").innerHTML = "";
    document.getElementById("lista-leyendo").innerHTML = "";
    document.getElementById("lista-leidos").innerHTML = "";

    var i;
    for (i = 0; i < libros.length; i = i + 1) {
        agregarItem(libros[i], i);
    }
}

function agregarItem(libro, indice) {
    var lista = document.getElementById("lista-" + libro.estado);
    var item = document.createElement("li");

    item.innerHTML =
        libro.titulo + " — " + libro.autor +
        " <select data-indice=\"" + indice + "\">" +
        "<option value=\"por-leer\">Por leer</option>" +
        "<option value=\"leyendo\">Leyendo</option>" +
        "<option value=\"leidos\">Leidos</option>" +
        "</select> " +
        "<button class=\"boton\" type=\"button\" data-borrar=\"" + indice + "\">Borrar</button>";

    item.querySelector("select").value = libro.estado;
    lista.appendChild(item);
}

document.getElementById("form-libro").addEventListener("submit", function (evento) {
    evento.preventDefault();
    libros.push({
        titulo: document.getElementById("titulo").value,
        autor: document.getElementById("autor").value,
        estado: document.getElementById("estado").value
    });
    guardar();
    dibujar();
    document.getElementById("form-libro").reset();
});

document.querySelector(".lista-usuario").addEventListener("change", function (evento) {
    if (evento.target.tagName === "SELECT" && evento.target.getAttribute("data-indice")) {
        var indice = Number(evento.target.getAttribute("data-indice"));
        libros[indice].estado = evento.target.value;
        guardar();
        dibujar();
    }
});

document.querySelector(".lista-usuario").addEventListener("click", function (evento) {
    if (evento.target.getAttribute("data-borrar")) {
        var indice = Number(evento.target.getAttribute("data-borrar"));
        libros.splice(indice, 1);
        guardar();
        dibujar();
    }
});

dibujar();
