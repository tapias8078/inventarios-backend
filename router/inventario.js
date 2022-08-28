const {Router} = require('express')
const router = Router()

router.get('/', function(req,res){
    res.send('Hola Mundo estoy en Invetario GET')
})
router.post('/', function(req,res){
    res.send('Hola Mundo estoy en Invetario Post')
})
router.put('/', function(req,res){
    res.send('Hola Mundo estoy en Invetario PUT')
})

module.exports = router