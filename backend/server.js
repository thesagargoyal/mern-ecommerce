const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/databse');

dotenv.config({path: 'backend/config/config.env'});

// Handle the uncaught Exceptions
process.on('uncaughtException',err=>{
    console.log(`Error : ${err.message}`);
    console.log('Shutting down server due to uncaught exceptions');
    process.exit(1);
})

connectDB();

const server = app.listen(process.env.PORT, ()=>{
    console.log('Server is running on PORT', process.env.PORT);
})

process.on('uncaughtException', err=>{
    console.log(`Error : ${err.message}`);
    console.log('Shutting down the server due to unhandled Promise rejections');
    server.close(()=>{
        process.exit(1);
    })
})