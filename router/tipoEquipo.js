const {Router} = require('express')
const router = Router()

router.get('/', function(req,res){
    res.send('Hola Mundo estoy en tipoEquipo GET')
})
router.post('/', function(req,res){
    res.send('Hola Mundo estoy en tipoEquipo Post')
})
router.put('/', function(req,res){
    res.send('Hola Mundo estoy en tipoEquipo PUT')
})

module.exports = router