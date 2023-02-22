const {Router}= require('express')
const CartDao = require('../dao/Cart.dao')

const router = Router()

router.get("/", async (req, res) => {
    try{
        const response = await CartDao.getCarts()
        
        res.json(response)
    }catch(error){
        return error
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params

    try{
        const response = await CartDao.getCartById(id)

        res.json(response)
    }catch(error){
        return error
    }
})


router.post("/:cartId/product/:productId", async (req, res) => {
    const { cartId, productId } = req.params

    try{
        const response = await CartDao.aaddToCart(cartId, productId)

        res.json(response)
    }catch(error){
        return error
    }
})


router.put("/:id", async (req, res) => {
    const { id } = req.params
    const { products } = req.body

    try{
        const response = await CartDao.updateCartItem(id, products)

        res.json(response)
    }catch(error){
        return error
    }
})

router.put("/:cartId/product/:productId", async (req, res) => {
    const { cartId, productId } = req.params
    const { quantity } = req.body

    try{
        const response = await CartDao.updateCartItem(cartId, productId, quantity)

        res.json(response)
    }catch(error){
        return error
    }
})

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params

    try{
        const response = await CartDao.removeFromCart(id)

        res.json(response)
    }catch(error){
        return error
    }
})