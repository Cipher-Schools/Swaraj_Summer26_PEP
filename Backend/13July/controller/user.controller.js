const User = require("../model/user.schema");

const userHome = async (req, res) => {
    const userData = await User.find().limit(10);
    res.json({
        status: "success",
        data: userData
    });
}

module.exports = {
    userHome
}