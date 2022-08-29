const {Router} = require('express')
const Marca = require('../models/Marca')

const router = Router()

router.get('/', async function(req,res){
    try{
        const marcas = await Marca.find()
        res.send(marcas)
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
    
})
router.post('/', async function(req,res){
    try{
        let marca = new Marca()
        marca.nombre = req.body.nombre
        marca.estado = req.body.estado
        marca.fechaCreacion = new Date()
        marca.fechaActualizacion = new Date()
        marca=await marca.save()
        res.send(marca)
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
})
router.put('/:marcaId', async function(req,res){
    try{
        let marca = await Marca.findById(req.params.marcaId)
        if(!marca){
            return res.send('Marca no existe')
        }

        marca.nombre = req.body.nombre
        marca.estado = req.body.estado        
        marca.fechaActualizacion = new Date()        
        marca=await marca.save()
        res.send(marca)
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
})
module.exports = router