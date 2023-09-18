const { sign } = require('jsonwebtoken')
const { Product } = require('../models/Product')

class ProductController {
    async create(req, res) {
        try {
            const {
                name,
                description,
                price,
                logUrl,
                category
            } = req.body

            const existProduct = await Product.findOne({where: {name: name}})
            if (existProduct) {
                return res.status(403).send({message: "Product already exists"})
            }

            const productCreated = await Product.create({
                name,
                description,
                price,
                logUrl,
                category
            })

            return res.status(201).send(productCreated)
        } catch (error) {
            return res.status(400).send({
                message: "Error on product creation",
                cause: error.message
            })
        }
    }

    async findAll(req, res) {
        try {
            const products = await Product.findAll()

            return res.status(200).send(products)
        } catch (error) {
            return res.status(400).send({
                message: "Error on listing all products",
                cause: error.message
            })
        }
    }

    async findOne(req, res) {
        try {
            const { productId } = req.params
            const product = await Product.findByPk(productId)

            if(!product){
                return res.status(404).send({message:`Product not found`})
            }

            return res.status(200).send({product})
        } catch (error) {
            return res.status(400).send({
                message: "Error on listing the product",
                cause: error.message
            })
        }
    }

    async remove(req, res) {
        try {
            const { productId } = req.params
            const product = await Product.findByPk(productId)

            if(!product){
                return res.status(404).send({message:`Product not found`})
            }

            await product.destroy()

            return res.status(200).send({message: "Product removed successfully!"})
        } catch (error) {
            return res.status(400).send({
                message: "Error on removing the product",
                cause: error.message
            })
        }
    }

    async restore(req, res) {
        try {
            const { productId } = req.params
            const product = await Product.findOne({where: {productId:productId}, paranoid:false})

            if(!product){
                return res.status(404).send({message:`Product not found`})
            }

            await product.restore()

            return res.status(201).send({message: "Product restored successfully!"})
        } catch (error) {
            return res.status(400).send({
                message: "Error on restoring the product",
                cause: error.message
            })
        }
    }

    async findAllAdm(req, res) {
        try {
            const product = await Product.findAll({paranoid:false})

            if(!product){
                return res.status(404).send({message:`Products not found`})
            }

            return res.status(200).send({product})
        } catch (error) {
            return res.status(400).send({
                message: "Error on listing all products",
                cause: error.message
            })
        }
    }
}

module.exports = new ProductController()