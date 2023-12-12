const INPUT = document.querySelector("#nombre");

document.querySelector(".boton").addEventListener("click", leer)
INPUT.addEventListener("keydown", teclado)

limpiar();



function teclado(e){
    (e.key==="Enter") && leer();
}

function leer(){
const NOMBRE=INPUT.value.trim();
(NOMBRE) && escribir(convertir(NOMBRE));
limpiar();
}

function convertir(valor){
    let nombreCorrecto=`${valor.substring(0,1).toUpperCase()}${valor.substring(1).toLowerCase()}`
        return nombreCorrecto;
}

function limpiar(){
    INPUT.value="";
    INPUT.focus();
}

function escribir(nombre){
    (!document.querySelector("select")) && crearSelect();

document.querySelector("select").innerHTML+=`<option>${nombre}</option>`
}

function crearSelect(){
document.querySelector(".resultado").innerHTML = `<select></select>`;
document.querySelector("select").addEventListener("click", saludo);
}

function saludo(){
  INPUT.value=document.querySelector("select").value;  
}