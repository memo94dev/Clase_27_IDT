let estado = true;
setTimeout("cambio()", 1000);
function cambio() {
    estado = !estado;
    if (estado == true) {
        img.src = "./img/Foto3.jpg";
    }
    else {
        img.src = "./img/Foto4.jpg";
    }
    setTimeout("cambio()", 2000);
}