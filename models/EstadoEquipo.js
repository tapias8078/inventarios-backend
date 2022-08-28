const {Schema, model} = require('mongoose')

const EstadoEquipoSchema = Schema({
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

module.exports = module('EstadoEquipo',EstadoEquipoSchema)