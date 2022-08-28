const {Router} = require('express')
const router = Router()
const Usuario = require('../models/Usuario')


router.post('/', async function(req,res){
    try{
    console.log('Archivo recibido', req.body);

    const existeUsuario = await Usuario.findOne({email: req.body.email})
    if(existeUsuario){
        return res.send('El email ya existe')
    }

    let usuario = new Usuario();
    usuario.nombre = req.body.nombre;
    usuario.email = req.body.email;
    usuario.estado = req.body.estado;
    usuario.fechaCreacion = new Date();
    usuario.fechaActualizacion = new Date()

    usuario = await usuario.save()
    res.send(usuario)
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
})

router.get('/', async function(req,res){
    try{
        const usuario = await Usuario.find()
        res.send(usuario)
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')

    }

})
router.put('/:usuarioId', async function(req,res){
    try{
        console.log('Archivo recibido', req.body, req.params);

        let usuario = await Usuario.findById(req.params.usuarioId)

        if (!usuario) {
            return res.send('Usuario no existe');
        }

        const existeUsuario = await Usuario
        .findOne({email: req.body.email, _id: { $ne: usuario._id }})
        console.log('Respuesta existe usuario', existeUsuario);

        if (existeUsuario) {
            return res.send('Email ya existe')
        }

    
        usuario.email = req.body.email
        usuario.nombre = req.body.nombre
        usuario.estado = req.body.estado
        usuario.fechaActualizacion = new Date()
                  
        usuario = await usuario.save()
        res.send(usuario)
        }catch(error){
            console.log(error);
            res.send('Ocurrio un error')
        }
})
module.exports = router