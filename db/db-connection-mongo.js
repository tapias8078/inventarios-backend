const mongoose = require('mongoose')

const getConnection = async () => {
    try{
        const url = 'mongodb://tapias8078:dany1288@ac-hdabbzf-shard-00-00.f4f2jqv.mongodb.net:27017,ac-hdabbzf-shard-00-01.f4f2jqv.mongodb.net:27017,ac-hdabbzf-shard-00-02.f4f2jqv.mongodb.net:27017/inventariosBackend?ssl=true&replicaSet=atlas-nu0a8a-shard-0&authSource=admin&retryWrites=true&w=majority'
        await mongoose.connect(url)
        console.log('conexion exitosa');
    }catch(error){
        console.log(error);
    }

}

module.exports = {
    getConnection,

}