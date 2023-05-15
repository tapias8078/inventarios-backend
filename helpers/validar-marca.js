const validarMarca = (req) => {
    const validaciones = []
    if(!req.body.nombre){
        validaciones.push('Nombre es Requerido')
    }
    if(!req.body.estado){
        validaciones.push('Estado es Requerido')
    }
   

    return validaciones
}

module.exports = {
    validarMarca
}