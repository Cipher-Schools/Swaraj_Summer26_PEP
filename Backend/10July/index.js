const fs = require("fs");
const data = require("./data");

// console.log(data);

// fs.writeFileSync("note.txt", "hello from the code side .")

// fs.writeFileSync("arr.json", JSON.stringify(data));

fs.writeFile("arr.json", JSON.stringify(data), (err) => {
  if (!err) {
    console.log("done");

    const arr = fs.readFileSync("arr.json", "utf-8");
    console.log(arr);
  }
});

// const note = fs.readFileSync("arr.json", "utf-8");
console.log("After write file sync");

// const arr = [10, 20, -30, -40, 50];
