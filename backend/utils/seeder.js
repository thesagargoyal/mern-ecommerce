const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/databse');
const products = require('../data/products');

dotenv.config({path: 'backend/config/config.env'});

connectDatabase();

const seedProducts = async () => {
    try{
        
        await Product.deleteMany();
        console.log("Products deleted");
        await Product.insertMany(products);
        console.log("Products Updated");
        process.exit();

    }catch(error){
        console.log(error.mmessgae);
        process.exit();
    }
}

seedProducts(); 
