
let arr = [
    {
        id: 1,
        name: "John",
        age: 25
    },
    {
        id: 2,
        name: "Jane",
        age: 30
    },
    {
        id: 3,
        name: "Bob",
        age: 35
    }
]

const map = new Map();




// npm init -y
// npm i express nodemon 
const express = require("express"); // Common JS
// import express from "express"; - Module JS

const app = express();

app.use(express.json());

// app.get("/test", (req, res) => {
//     res.status(200).send("Hello world from EXPRESS");
// })


// GET REQUESTS - READ START
app.get("/test", (req, res) => {
    res.status(200).json("Hello world from EXPRESS");
})

app.get("/data", (req, res) => {
    res.status(200).json({
        data : arr,
        status : "success"
    });
})

app.get("/getuser/:id", (req, res) => { // Params from the URL
    // console.log(req);
    const id = Number(req.params.id);

    const data = arr.find(idx => idx.id === id);

    res.status(200).json({
        status: "success",
        data: data ? data : "Not found"
    })

    // console.log(data ? data : "Not found");
    // res.status(200).json(data);
})

app.get("/userdetail", (req, res) => {

    const id = Number(req.query.id);

    const data = arr.find(idx => idx.id === id);

    res.status(200).json({
        status: "success",
        data: data ? data : "Not found"
    })

})
// GET REQUESTS - READ END

// PUT REQUESTS - UPDATE START
app.put("/updatedata/:id", (req, res) => {
    const id = Number(req.params.id);
    const {name, age} = req.query;

    arr.map(idx => {
        if(idx.id === id) {
            idx.name = name;
            idx.age = age;
        }
    })

    res.status(202).json({
        status: "success",
        data: arr
    })
})
// PUT REQUESTS - UPDATE END

// DELETE REQUEST START
app.delete("/delete/:id", (req, res) => {
    const id = Number(req.params.id);

    arr = arr.filter(item => item.id !== id);

    res.status(202).json({
        status: "success",
        data: arr
    })
})
// DELETE REQUEST END



app.post("/adduser", (req, res) => {

    console.log(req.body);

    const newId = Date.now();
    
    const url = req.body.url;
    map.set(newId, url);
    console.log(map);
    const obj = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age
    }

    arr.push(obj);

    res.status(202).json({
        status: "success",
        // data: arr,
        url : newId
    })

})





app.listen(8080, () => {
    console.log("%cServer is running on port 8080", "color: red; font-weight: bold;");
})

