const h1 = document.querySelector('h1');

const primerNumero = document.querySelector('#primerNumero');
const segundoNumero = document.getElementById('segundoNumero')
const btn = document.querySelector('#btnSumar');
const pResult = document.querySelector('#result');

console.log(primerNumero+segundoNumero)
console.log(h1);


function sumar () {
    c=parseInt(primerNumero.value)+parseInt(segundoNumero.value);
    pResult.innerText= "Resultado: " + c; 
}