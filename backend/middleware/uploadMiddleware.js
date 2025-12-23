const multer = require('multer')
const fs = require('fs')
const path = require ('path')
//configuring storage

const folder = path.join(__dirname, '..' , 'uploads')
if(!fs.existsSync(folder)) fs.mkdirSync(folder, {recursive : true})
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, folder);
    },
    filename: (req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`)
    },
})

//file filtering
const fileFilter = (req,file,cb)=>{
    const allowedTypes = ['image/jpeg','image/png','image/jpg']
    console.log(file.mimetype);
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(new Error('Only .png, .jpeg & .jpg formats are allowed'), false)
    }
}
const upload = multer({storage, fileFilter})

module.exports = upload;