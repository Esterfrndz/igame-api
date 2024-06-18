const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    id:{type:Number,
        required:true
    },
    name: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      description: String,
      image: {
        type:String,
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;