const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');

// adding new product admin/api/v1/product/new
exports.newProduct = async (req, res, next)=>{

    try {
        const product = await Product.create(req.body);
    
        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(500).json({error: error.response, success: false});
    }

}

// get all products /api/v1/products
exports.getProducts = async (req, res, next)=>{
    
    try {
        const products = await Product.find();
        res.status(200).json({success: true, count: products.length, products });
    } catch (error) {
        res.status(500).json({error: error.response, success: false});
    }

}

// get single product /api/v1/product/:id
exports.getSingleProduct = async (req, res, next)=>{

   const product = await Product.findById(req.params.id);

   if(!product){
       return next(new ErrorHandler('Product not found', 404));
   }

   res.status(200).json({success: true, message: "Product found", product})

} 

// Update product admin/api/v1/product/:id 
exports.updateProduct = async (req, res, next)=>{


    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({success: true, message: "Product updated Successfully", product});
}

//Delete product admin/product/:id 
exports.deleteProduct = async (req, res, next)=>{

    const product = await Product.findById(req.params.id);
    
    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        })
    }

    await product.remove();

    res.status(200).json({success: true,message: "Product deleted"});

}