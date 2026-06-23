console.log("Hello class");

const htmlDivElement = document.getElementById("root");
const htmlButtonElement = document.getElementById("myButton");



// if (x == 0 && x == 1 && x == 2) {
//   console.log("All conditions met");
// } else {
//   console.log("Conditions not met");
// }

// console.dir(htmlDivElement.style);
// console.log(Math.random());

// function changeShape(n){
//     if(n == 1){
//         htmlDivElement.style.borderRadius = "0%";
//     } else {
//         htmlDivElement.style.borderRadius = "100%";
//     }
// }

// const changeShape = (n) => {

// }

htmlButtonElement.addEventListener("click", () => {
  htmlDivElement.style.backgroundColor = "red";
  console.log(Math.random());
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;

  htmlDivElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Template literal `${variable}`
  const randomNum = Math.random() * 2;
  // changeShape(randomNum);
});

const emp = [
  {
    id: 1,
    age: 30,
    val: 10,
    name: "Alice",
    address: {
      city: "New York",
      country: "USA",
    },
  },
  {
    id: 2,
    age: 15,
    val: 10,
    name: "Bob",
    address: {
      city: "London",
      country: "UK",
    },
  },
  {
    id: 3,
    age: 25,
    val: 10,
    name: "Charlie",
    address: {
      city: "London",
      country: "UK",
    },
  },
];

// for(let i = 0; i < emp.length; i++){
//     console.log(emp[i]?.address?.country);
// }

// HOF - Higher Order Functions
// forEach , Map , Filter, Reduce,

// emp.forEach((e, i, arr) => {
//     console.log(e);
// });

// const ageArr = emp.filter((ele, idx, arr) => {
//   return ele.age > 18;
// });

// const doubleArr = emp.map((ele, idx, arr) => {
//   ele.val = ele.val * 2;
//   return ele;
// });

// console.log(ageArr);
// console.log(doubleArr);

const apiLink = "https://jsonplaceholder.typicode.com/users";
// const apiLink = "https://jsonplaceholder.typicode.com/photos"

console.log("Before fetching data");

async function fetchData(apiLink) {
  console.log("feronth");
  const data = await fetch(apiLink);
  const arr = await data.json();

  const container = document.getElementById("container");
  arr.forEach((ele) => {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.padding = "10px";
    div.style.margin = "10px";

    div.innerHTML = `
    <p>${ele.name}</p>
      <p>${ele.email}</p>
      <p>${ele.address.city}, ${ele.address.country}</p>

    `;

    container.appendChild(div);
  });
}

fetchData(apiLink);

console.log("After data");
