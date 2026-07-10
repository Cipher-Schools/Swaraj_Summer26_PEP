const fs = require("fs");
const data = require("./data");

const http = require("http");

const server = http.createServer((req, res) => {
  const arr = fs.readFileSync("arr.json", "utf-8");

  console.log(arr);

  // console.log(req);
  console.log(res);

  const resData = {
    data: data,
    arr: arr,
    "test": "hello from test"
  };

  if (req.url == "/test") {
    res.end(JSON.stringify(resData));
  }
});

server.listen(3000);

// server.listen(() => {
//     console.log("server is running on PORT 3000");

// });

// console.log(data);

// fs.writeFileSync("note.txt", "hello from the code side .")

// fs.writeFileSync("arr.json", JSON.stringify(data));

// fs.writeFile("arr.json", JSON.stringify(data), (err) => {
//   if (!err) {
//     console.log("done");

//     const arr = fs.readFileSync("arr.json", "utf-8");
//     console.log(arr);
//   }
// });

// const note = fs.readFileSync("arr.json", "utf-8");
// console.log("After write file sync");

// const arr = [10, 20, -30, -40, 50];
