const mongoose = require('mongoose')

const cartCollection = 'carts'

const cartSchema = new mongoose.Schema({
    products: {
        type: [
            {
                id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "products" 
                }
            }
        ]
    }
})


cartSchema.pre("find", function() { this.populate("products.id") })
const cartModel = mongoose.model(cartCollection, cartSchema)

module.exports = cartModel