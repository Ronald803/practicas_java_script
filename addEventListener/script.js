const h1 = document.querySelector('h1');

const primerNumero = document.querySelector('#primerNumero');
const segundoNumero = document.getElementById('segundoNumero')
const btn = document.querySelector('#btnSumar');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

//btn.addEventListener('click',sumar);



form.addEventListener('submit', sumar);

function sumar (event) {
    event.preventDefault();
    c=parseInt(primerNumero.value)+parseInt(segundoNumero.value);
    pResult.innerText= "Resultado: " + c; 
}