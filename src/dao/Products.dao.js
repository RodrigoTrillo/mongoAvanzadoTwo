const Product = require('./models/Product.model')


class ProductDao {
    async find(){
        try {
            const products = await Product.paginate({},{limit:10,page:5})
            return products
        } catch (error) {
            return error
        }
    }
}

module.exports = ProductDao