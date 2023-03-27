import data from './data.js';

console.log(data.dogs[0]);

const dogInfo = document.getElementById('Mostrar perritos');

//mostrar data
data.dogs.forEach((dog) => { 
    const perrito = `<h2>${dog.breed}</h2>
                     <img src="${dog.image}" class="dog-image">`;
    dogInfo.innerHTML += perrito;
});

// Funcion ordenar
function ordenarPerritos(dogs) {
    dogInfo.innerHTML = "";
    dogs.forEach((dog) => {
      const perrito = `<h2>${dog.breed}</h2>
                       <img src="${dog.image}" class="dog-image">`;
      dogInfo.innerHTML += perrito;
    });
  }
  
  // Mostrar datos
  ordenarPerritos(data.dogs);
  
  // Funcion ordenar datos
  const orderSelect = document.getElementById("order-select");
  orderSelect.addEventListener("change", function () {
    const selectedOption = orderSelect.value;
  
    const sortedData = data.dogs.sort((a, b) => {
      return selectedOption === "asc"
        ? a.breed.localeCompare(b.breed)
        : b.breed.localeCompare(a.breed);
    });
  
    ordenarPerritos(sortedData);
  });