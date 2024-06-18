const Product = require('../models/productModel.js');

exports.getAllProducts = async (req,res) =>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await Product.findOne({id: productId});
      if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

//TECLADOS
  exports.getProductsByCategory = async (req, res) => {
    const category = 'teclado'; // Categoría a filtrar
  
    try {
      const products = await Product.find({ category: { $regex: category, $options: 'i' } });
  
      if (products.length === 0) {
        return res.status(404).json({ message: `No se encontraron productos en la categoría que contiene "${category}"` });
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  //MOUSE
  exports.getProductsByCategoryMouse = async (req, res) => {
    const category = 'raton'; // Categoría a filtrar
  
    try {
      const products = await Product.find({ category: { $regex: category, $options: 'i' } });
  
      if (products.length === 0) {
        return res.status(404).json({ message: `No se encontraron productos en la categoría que contiene "${category}"` });
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  //AURICULAR

  exports.getProductsByCategoryHeadphone = async (req, res) => {
    const category = 'auricular'; // Categoría a filtrar
  
    try {
      const products = await Product.find({ category: { $regex: category, $options: 'i' } });
  
      if (products.length === 0) {
        return res.status(404).json({ message: `No se encontraron productos en la categoría que contiene "${category}"` });
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  //POST
  exports.createProduct = async (req, res) => {
    const product = new Product({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description
    });
  
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  //UPDATE
  exports.updateProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
      res.status(200).json(product);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  //DELETE
  exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
      res.status(200).json({ message: 'Producto eliminado' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };