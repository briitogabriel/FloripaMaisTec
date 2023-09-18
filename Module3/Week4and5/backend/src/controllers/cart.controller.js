const { Cart } = require('../models/Cart')
const { Product } = require('../models/Product')

class CartController {
    async create(req, res) {
        try {
            const {
                userId,
            } = req.body

            const user = await User.findByPk(userId)

            if(!user){
                return res.status(404).send({message: "The user informed does not exists!"})
            }

            const existCart = await Cart.findOne({ where:{ 
                userId:userId, 
                status: true}
            })
                   
            if(existCart){
                return res.status(403).send({message: "There is already a Cart open for this user"})
            }

            const cartCreated = await Cart.create({
                userId,
                price: 0,
                status: true
            })

            return res.status(201).send(cartCreated)
        } catch (error) {
            return res.status(400).send({
                message: "Error on creating the Cart",
                cause: error.message
            })
        }
    }

    async findAll(req, res) {
        try {
            const carts = await Cart.findAll()

            return res.status(200).send(carts)
        } catch (error) {
            return res.status(400).send({
                message: "Error on listing all Carts",
                cause: error.message
            })
        }
    }

    async findOne(req, res) {
        try {
            const { cartId } = req.params
            const cart = await Cart.findByPk(cartId)

            if(!cart){
                return res.status(404).send({message:'Cart not found'})
            }

            return res.status(200).send({cart})
        } catch (error) {
            return res.status(400).send({
                message: "Error on listing the Cart",
                cause: error.message
            })
        }
    }

    async remove(req, res) {
        try {
            const { cartId } = req.params
            const cart = await Cart.findByPk(cartId)

            if(!cart){
                return res.status(404).send({message:'Cart not found'})
            }

            await cart.destroy()

            return res.status(200).send({message: "Cart removed successfully!"})
        } catch (error) {
            return res.status(400).send({
                message: "Error on removing the Cart",
                cause: error.message
            })
        }
    }

    async restore(req, res) {
        try {
            const { cartId } = req.params
            const cart = await Cart.findOne({where: {cartId:cartId}, paranoid:false})

            if(!cart){
                return res.status(404).send({message:'Cart not found'})
            }

            await cart.restore()

            return res.status(201).send({message: "Cart restored successfully!"})
        } catch (error) {
            return res.status(400).send({
                message: "Error os restoring the Cart",
                cause: error.message
            })
        }
    }

    async findAllAdm(req, res) {
        try {
            const cart = await Cart.findAll({paranoid:false})

            if(!cart){
                return res.status(404).send({message:'Cart not found'})
            }

            return res.status(200).send({cart})
        } catch (error) {
            return res.status(400).send({
                message: "Error on listing all Carts",
                cause: error.message
            })
        }
    }

    async buyProduct(req, res) {
        try {
            const { cartId, productsId } = req.body
            console.log(productsId)
            const cart = await Cart.findOne({ where: {cartId:cartId} })
            const product = await Product.findAll({ where: {productId: productsId} })

            await cart.addProduct(product);

            return res.status(201).send({
                message: "Product inserted in the Cart successfully!"
            })
        } catch (error) {
            return res.status(400).send({
                message: "Error on buying the Product for this User",
                cause: error.message
            })
        }
    }
}

module.exports = new CartController()