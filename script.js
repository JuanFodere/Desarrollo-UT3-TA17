const numero = document.getElementById("numero")
const boton = document.getElementById("boton")

let contador = 1

function funcion(){
    numero.innerText = contador
    contador ++
}

boton.addEventListener("click", ()=>{funcion()})