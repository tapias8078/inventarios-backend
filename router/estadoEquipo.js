const {Router} = require('express')
const EstadoEquipo = require('../models/EstadoEquipo')


const router = Router()

router.get('/', async function(req,res){
    try{
        const estados = await EstadoEquipo.find()
        res.send(estados)
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }

})
router.post('/', async function(req,res){
    try{
        let estadoEquipo = new EstadoEquipo();
        estadoEquipo.nombre = req.body.nombre
        estadoEquipo.estado = req.body.estado
        estadoEquipo.fechaCreacion = new Date()
        estadoEquipo.fechaActualizacion = new Date()
        estadoEquipo = await estadoEquipo.save()   
        res.send(estadoEquipo)
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
})
router.put('/:estadoEquipoId', async function(req,res){
    try{
        let estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoId)
        if(!estadoEquipo){
            return res.send('No existe estado')
        }
        estadoEquipo.nombre = req.body.nombre
        estadoEquipo.estado = req.body.estado
        estadoEquipo.fechaActualizacion = new Date()
        estadoEquipo = await estadoEquipo.save()   
        res.send(estadoEquipo)
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
})

module.exports = router