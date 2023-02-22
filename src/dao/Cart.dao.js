const cartModel = require('./models/Cart.model')
const Product = require('./models/Product.model')

class CartDao {
    async getCarts(){
        try {
            const carts = await cartModel.find()
            return carts
        } catch (error) {
            return error
        }
    }
async getCartById(id){
    try {
        const cart = await cartModel.find({_id:id})
        const mapCart= cart.map(x=>({id: x._id, products: x.products}))
        return mapCart
    } catch (error) {
        return error
    }
}

async createCart(){
    try {
        const response = await cartModel.create({products:[]})
        return response
    } catch (error) {
        return error
    }
}

async addToCart(){
    const item = cart.find(item=> item.id === product.id)
    try {
        if (item) {
            item.quantity++
        } else {
            cart.push ({...product, quantity: 1})
        }
        return item
    } catch (error) {
        return error
    }
}

async removeFromCart(productId){
    try {
        cart = cart.filter(item => item.id !== productId)
        return cart
    } catch (error) {
        return error
    }
}


async updateCartItem(productId, newQuantity){
    cart = cart.map(item =>{
        if(item.id === productId){
            item.quantity = newQuantity;
        }
        return item
    })
}


}


module.exports = CartDao