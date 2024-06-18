const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinaryConfig');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'products',
    format: async (req, file) => 'jpeg', // Soporte para diferentes formatos
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({ storage: storage });

module.exports = upload;