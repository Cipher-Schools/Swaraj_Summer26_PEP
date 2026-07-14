const arr = require("../storage/storage")

const authLogin = (req, res) => {
    res.json("Hello from login");
}

const authSignUp = (req, res) => {
    console.log(arr);
    const {username, password} = req.body;
    console.log(username, password);
    const obj = {
        id: Date.now,
        username,
        password
    }

    arr.push(obj);
    res.status(201).json({
        status : "SUCCESS",
        message: "User Created successfully"
    });
}

const authError = (req, res) => {
    res.json("Error PAge");
}

module.exports = {
    authSignUp,
    authError,
    authLogin
}