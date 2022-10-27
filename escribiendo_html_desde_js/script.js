const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafitoClase = document.querySelector('.parrafitoClase');
const parrafitoID = document.querySelector('#parrafitoID');
const input = document.querySelector('input');

//document.querySelector agarra al primero que lo encuentra
//document.querySelectorAll agarra a todos los que cumplan con ese selector
console.log(h1);
console.log(input.value);
console.log({
    h1,
    p,
    parrafitoClase,
    parrafitoID,
    input,
})
p.innerText = 'Parrafo <br> con javascript'
h1.innerHTML = 'Introduciendo HTML <br> desde javascript'
console.log(h1.getAttribute('tamaño'));
h1.setAttribute('class','verde');
h1.setAttribute('tamaño','pequeño');
h1.classList.add('rojo');
h1.classList.remove('verde');

const img = document.createElement('img');
img.setAttribute('src', 'https://static.javatpoint.com/images/javascript/javascript_logo.png')
console.log(img);

parrafitoID.innerText = '';
parrafitoID.append(img);