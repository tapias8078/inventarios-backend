const {Router} = require('express')
const router = Router()

router.get('/', function(req,res){
    res.send('Hola Mundo estoy en crear usuario Post')
})
router.post('/', function(req,res){
    res.send('Hola Mundo estoy en crear usuario Post')
})
router.put('/', function(req,res){
    res.send('Hola Mundo estoy en crear usuario PUT')
})
module.exports = router