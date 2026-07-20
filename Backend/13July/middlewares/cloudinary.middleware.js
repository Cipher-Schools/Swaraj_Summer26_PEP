const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    const formattedFile = path.resolve(localFilePath).replace(/\\/g, "/");

    if (!fs.existsSync(formattedFile)) {
      console.error("Please provide valid file path");
      return null;
    }

    const response = await cloudinary.uploader.upload(formattedFile, {
      resource_type: "auto",
    });

    fs.unlinkSync(formattedFile);

    return response;
  } catch (err) {
    console.error("Error in uploadOnCloudinary", err);
  }
};

module.exports = uploadOnCloudinary;
