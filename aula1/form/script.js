const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")
const buttonSomar = document.getElementById("buttonSomar")
const buttonSubtrair = document.getElementById("buttonSubtrair")
const buttonMultiplicar = document.getElementById("buttonMultiplicar")
const buttonDividir = document.getElementById("buttonDividir")
const formulario = document.getElementById("formulario")

function somar() {
    if(numero1.value !== '' && numero2.value !== ''){
        resultado.value = parseInt(numero1.value) + parseInt(numero2.value)
        formulario.classList.remove("subtrair", "multiplicar", "dividir")
        formulario.classList.add("somar")
    } else {
        alert("Preencha os campos!")
    }
}

function subtrair() {
    if(numero1.value !== '' && numero2.value !== ''){
        resultado.value = parseInt(numero1.value) - parseInt(numero2.value)
        formulario.classList.remove("somar", "multiplicar", "dividir")
        formulario.classList.add("subtrair")
    } else {
        alert("Preencha os campos!")
    }
}

function multiplicar() {
    if(numero1.value !== '' && numero2.value !== ''){
        resultado.value = parseInt(numero1.value) * parseInt(numero2.value)
        formulario.classList.remove("subtrair", "somar", "dividir")
        formulario.classList.add("multiplicar")
    } else {
        alert("Preencha os campos!")
    }
}

function dividir() {
    if(numero1.value !== '' && numero2.value !== ''){
        resultado.value = parseInt(numero1.value) / parseInt(numero2.value)
        formulario.classList.remove("subtrair", "multiplicar", "somar")
        formulario.classList.add("dividir")
    } else {
        alert("Preencha os campos!")
    }
}

buttonSomar.addEventListener("click", somar)
buttonSubtrair.addEventListener("click", subtrair)
buttonMultiplicar.addEventListener("click", multiplicar)
buttonDividir.addEventListener("click", dividir)
