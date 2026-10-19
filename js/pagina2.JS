//funcion:lee el nombre y lo muestra
function mostrarNombre(){

let nombre= sessionStorage.getItem("nombre");
let cuidad= sessionStorage.getItem("ciudad");

    if (nombre=== null){
        document.getElementById("saludo").textContent= "no hay ningun nombre guardado";

    }else{
        const nombre=sessionStorage.getItem("nombre")
        const ciudad=sessionStorage.getItem("ciudad")
        document.getElementById("saludo").textContent="hola, " + nombre + " de " + cuidad;
    }
}

//funcion: borra el nombre y vuelve a mostrar el resultdo
function borrar(){
    sessionStorage.removeItem("nombre");
    mostrarNombre();
}

//Eventos
document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar"). addEventListener("click", borrar);