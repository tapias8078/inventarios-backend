const {Router} = require('express')
const TipoEquipo = require('../models/TipoEquipo')
const router = Router()

router.get('/', async function(req,res){
    try{
        const tipos = await TipoEquipo.find()
        res.send(tipos)
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }

})
router.post('/', async function(req,res){
    try{
        let tipoEquipo = new TipoEquipo();
        tipoEquipo.nombre = req.body.nombre
        tipoEquipo.estado = req.body.estado
        tipoEquipo.fechaCreacion = new Date()
        tipoEquipo.fechaActualizacion = new Date()
        tipoEquipo = await tipoEquipo.save()   
        res.send(tipoEquipo)
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
})
router.put('/:tipoEquipoId', async function(req,res){
    try{
        let tipoEquipo = await TipoEquipo.findById(req.params.tipoEquipoId)
        if(!tipoEquipo){
            return res.send('No existe estado')
        }
        tipoEquipo.nombre = req.body.nombre
        tipoEquipo.estado = req.body.estado
        tipoEquipo.fechaActualizacion = new Date()
        tipoEquipo = await tipoEquipo.save()   
        res.send(tipoEquipo)
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
})

module.exports = router