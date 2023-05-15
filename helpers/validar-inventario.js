const validarInventario = (req) => {
    const validaciones = []
    if(!req.body.serial){
        validaciones.push('Serial es Requerido')
    }
    if(!req.body.modelo){
        validaciones.push('Modelo es Requerido')
    }
    if(!req.body.descripcion){
        validaciones.push('Descripcion es Requerido')
    }
    if(!req.body.foto){
        validaciones.push('Foto es Requerida')
    }
    if(!req.body.fechaCompra){
        validaciones.push('Fecha Compra es Requerido')
    }
    if(!req.body.precio){
        validaciones.push('Precio es Requerido')
    }
    if(!req.body.usuario){
        validaciones.push('Usuario es Requerido')
    }
    if(!req.body.marca){
        validaciones.push('Marca es Requerido')
    }
    if(!req.body.tipoEquipo){
        validaciones.push('Tipo Equipo es Requerido')
    }
    if(!req.body.estadoEquipo){
        validaciones.push('Estado Equipo es Requerido')
    }

    return validaciones
}

module.exports = {
    validarInventario
}