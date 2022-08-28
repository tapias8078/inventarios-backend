const {Schema, model} = require('mongoose')

const MarcaSchema = Schema({
    nombre:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        required:true,
        enum: [
            'Activo', 'Inactivo'
        ]
    },
    fechaCreacion:{
        type:String,
        required:true,
        
    },
    fechaActualizacion:{
        type:String,
        required:true,

    }
})

module.exports = model('Marca', MarcaSchema)