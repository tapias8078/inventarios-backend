const mongoose = require('mongoose')
require('dotenv').config()

const getConnection = async () => {
    try{
        const url = process.env.URL
        await mongoose.connect(url)
        console.log('conexion exitosa');
    }catch(error){
        console.log(error);
    }

}

module.exports = {
    getConnection,

}