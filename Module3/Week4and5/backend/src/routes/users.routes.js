const { create, findAll, findOne, login, findCarts, update, updatePassword } = require('../controllers/user.controller')
const { Router } = require('express')
const { auth } = require('../middlewares/auth.middleware')

class UserRouter{
    routesFromUser() {
        const userRoutes = Router()
        userRoutes.post('/users', create)
        userRoutes.get('/users', auth , findAll)
        userRoutes.get('/users/:userId', auth, findOne)
        userRoutes.patch('/users/:userId', auth, update)
        userRoutes.patch('/users/:userId/change-password', auth, updatePassword)
        userRoutes.post('/users/login', login)
        userRoutes.get('/users/:userId/carts', findCarts)

        return userRoutes
    }
}

module.exports = new UserRouter()