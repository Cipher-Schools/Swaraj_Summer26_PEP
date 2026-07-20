const User = require("../model/user.schema");
const uploadOnCloudinary = require("../middlewares/cloudinary.middleware");

const userHome = async (req, res) => {
    const userData = await User.find().limit(10);
    res.json({
        status: "success",
        data: userData
    });
}

const createPost = async (req, res) => {
    try{
        const {title, description} = req.body;
        if(req.file){
           const uploadResponse = await uploadOnCloudinary(req.file.path);
           if(uploadResponse){
            res.json({
                status: "success",
                data: uploadResponse
            })
           }else{
            res.json({
                status: "error",
                data: "Something went wrong"
            })
           }
        }

    }catch(err){
        res.json({
            status: "error",
            data: err.message
        })
    }
} 

module.exports = {
    userHome
}