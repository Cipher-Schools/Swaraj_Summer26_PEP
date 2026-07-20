const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../public/uploads');
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}`-`${path.basename(file.originalName)}}`)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024
    },
    fileFilter: function(req, file, cn){
        if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
            return new Error("Please upload image file")
        }

        cn(null, true);
    },
})

module.exports = upload;