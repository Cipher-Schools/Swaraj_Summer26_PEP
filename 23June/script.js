// console.log("1 \n");

// setTimeout(() => {
//   console.log("4 \n");
//   setTimeout(() => {
//     console.log("10 \n");
//     setTimeout(() => {
//       console.log("9 \n");
//     }, 1000);
//   }, 0);
// }, 1000);

// setTimeout(() => {
//   console.log("3 \n");
//   setTimeout(() => {
//     console.log("8 \n");
//   }, 2000);

//   setTimeout(() => {
//     console.log("7 \n");
//   }, 0);
// }, 0);

// console.log("5 \n");

// let x = 1;
// const timer = setInterval(() => {
//   console.log(`Hello ${x}\n`);
//   x++;
// }, 1000);

// setTimeout(() => {
//   clearInterval(timer);
// }, 10000);

// const seconds = document.getElementById("seconds");
// const minutes = document.getElementById("minutes");
// const startButton = document.getElementById("startButton");
// const stopButton = document.getElementById("stopButton");

// console.log(seconds);

// let sec = 0;
// let min = 0;
// let currTime;

// function startTimer() {
//   currTime = setInterval(() => {
//     if (sec < 60) {
//       sec++;
//     } else {
//       sec = 0;
//       min++;
//     }
//     seconds.innerHTML = `${sec}`;
//     minutes.innerHTML = `${min}`;
//   }, 1000);
// }

// startButton.addEventListener("click", () => {
//   startTimer();
// });

// stopButton.addEventListener("click", () => {
//   clearInterval(currTime);
//   sec = 0;
//   min = 0;
//   seconds.innerHTML = `${sec}`;
//   minutes.innerHTML = `${min}`;
// });

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise resolved");
//   }, 1000);
// })
//   .then((data) => {
//     return data;
//   })
//   .then((d) => {
//     console.log(d.toUpperCase());
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("Promise settled");
//   })



// const createDough = () => {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Dough created");
//     }, 1000);
//   });
//   return promise;
// };

// const createSauce = (d) => {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Sauce created with ${d}`);
//     }, 1000);
//   });
//   return promise;
// };

// const createCheese = (d) => {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Pizza created with ${d}`);
//     }, 1000);
//   });
//   return promise;
// };

// createDough()
//   .then((d) => {
//     console.log(d);
//     return createSauce(d);
//   })
//   .then((s) => {
//     console.log(s); 
//     return createCheese(s);
//   })
//   .then((c) => {
//     console.log(c);
//   });

// const apiLink = "https://jsonplaceholder.typicode.com/users";

// fetch(apiLink)
// .then((d) => {
//     console.log(d);
//     return d.json();
// })
// .then((data) => {
//     console.log(data);
// })


const pokeApi = " https://pokeapi.co/api/v2/pokemon/Pikachu";

let pokObject = {};

fetch(pokeApi)
.then((d) => {
    console.log(d);
    return d.json();
})
.then((data) => {
    console.log(data);
    pokObject = data;
})
.then(() => {
    const pokemonDiv = document.getElementById("pokemon");
    pokemonDiv.innerHTML = `
        <h2>${pokObject.name}</h2>
        <img src="${pokObject.sprites.other["official-artwork"].front_default}" alt="${pokObject.name}" />
    `;
})

document.getElementById("pokemonInput").addEventListener("input", (event) => {
    console.log(event.target.value);
})