//funcion: guarda el nombre y cambia de pagina
let boton = document.getElementById("btn-guardar");
function guardar() {
    const nombre = document.getElementById("nombre").value;
    const ciudad = document.getElementById("ciudad").value;

    if (nombre === "" || nombre === null && ciudad === null || ciudad === "") {
        document.getElementById("solicitar").textContent = "llene los espacios"

    }
    else {
        sessionStorage.setItem("nombre", nombre);
        sessionStorage.setItem("ciudad", ciudad);
        window.location.href = "pagina2.html";
    }

}
//Evento: al hacer click en el boton, se ejecuta guardar
document.getElementById("btn-guardar").addEventListener("click", guardar);