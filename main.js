import data from './data.js';

console.log(data.dogs[0]);

const dogInfo = document.getElementById('Mostrar perritos');

data.dogs.forEach((dog) => { 
    const perrito = `<h2>${dog.breed}</h2>
                     <img src="${dog.image}" class="dog-image">`;
    dogInfo.innerHTML += perrito;
});