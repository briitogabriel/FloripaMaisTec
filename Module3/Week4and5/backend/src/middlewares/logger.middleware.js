async function logger(req, res, next) {
    console.log('IMPLEMENTAR SISTEMA DE LOGS AQUI!!')
    next()
}

module.exports = { logger }