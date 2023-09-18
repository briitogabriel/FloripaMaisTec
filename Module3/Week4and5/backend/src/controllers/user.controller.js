const { sign } = require('jsonwebtoken')
const { User } = require('../models/User')
const { Cart } = require('../models/Cart')
const { update, userExists } = require('../services/user.services')

const bcrypt = require('bcrypt')

class UserController {
    async create(req, res) {
        try {
            const {
                name,
                email,
                password
            } = req.body

            const userCreated = await User.create({
                name,
                email,
                password
            })

            return res.status(201).send(userCreated)
        } catch (error) {
            return res.status(400).send({
                message: "Error on User creation",
                cause: error.message
            })
        }
    }

    async findAll(req, res) {
        try {
            const users = await User.findAll()

            return res.status(200).send(users)
        } catch (error) {
            return res.status(400).send({
                message: "Error on listing all Users",
                cause: error.message
            })
        }
    }

    async findOne(req, res) {
        try {
            const { userId } = req.params
            
            const user = await User.findByPk(userId)
            if(!user){
                return res.status(404).send({message:`User not found!`})
              }

            return res.status(200).send(`User: ${user.email}`)
        } catch (error) {
            return res.status(400).send({
                message: "Error on listing the User",
                cause: error.message
            })
        }
    }

    async update(req, res) {
        try {
            const { userId } = req.params
            const { name } = req.body

            const user = await User.findByPk(userId)
            if(!user) {
                return res.status(400).send({message: "User not found!"})
            }

            if(!name) {
                return res.status(400).send({message: "Please inform fields that are allowed to be updated (name)"})
            }

            if(name === user.name) {
                return res.status(403).send({message: "The already uses this name"})
            }

            await update(userId, { name })
            // await User.update({name}, {where: { userId }})
            return res.status(204)

        } catch (error) {
            return res.status(400).send({
                message: "Error on updating the User",
                cause: error.message
            })
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body

            const user = await User.findOne({
                where: { email }
            })

            if(!user){
                return res.status(404).send({message: "User not found!"})
            }

            const match = bcrypt.compareSync(password, user.password)
            if(!match) {
                return res.status(401).send({message: "Invalid Password"})
            }
            
            const payload = {
                userId: user.userId,
                name: user.name,
                email: user.email
            }

            const token = sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' })
            return res.status(200).send({token})

        } catch (error) {
            return res.status(400).send({
                message: "Error on Login",
                cause: error.message
            })
        }
    }

    async findCarts(req, res) {
        try {
            const { userId } = req.params
            const user = await User.findOne({where: {
                userId:userId
            }, include:
                    [{model: Cart, as: 'carts', key: 'user_id'}]
            })

            if(!user){
                return res.status(404).send({message:`User not found`})
            }

            return res.status(200).send({user})
        } catch (error) {
            return res.status(400).send({
                message: "Error on listing the user",
                cause: error.message
            })
        }
    }

    async updatePassword(req, res) {
        try {
            const { userId } = req.params
            const { password } = req.body

            const user = await User.findByPk(userId)
            if(!user) {
                return res.status(400).send({message: "User not found!"})
            }

            const match = bcrypt.compareSync(password, user.password)
            if(match) {
                return res.status(400).json({ error: 'The new password must be different from the current password' })
            }

            await update(userId, {password})
            return res.status(204).send({message: 'Password updated successfully!'})

        } catch (error) {
            return res.status(400).send({
                message: "Error on updating the password",
                cause: error.message
            })
        }
    }
}

module.exports = new UserController()