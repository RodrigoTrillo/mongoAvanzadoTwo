const {Router}= require('express')  
const Product = require('../dao/models/Product.model')
const ProductDao = require('../dao/Products.dao')

const router = Router()

router.get('/', async(req, res)=>{
    const { limit, page, sort, query } = req.query
    try {
        const products =  await Product.find(limit,page,sort,query).explain('executionStats')
        res.json({mesagge: products})
    } catch (error) {
        
    }
})


router.get('/:pid',async (req,res)=>{
    const {id} = req.params
    try {
        const response = await Product.getProductById(id)
        return response 
    } catch (error) {
        
    }
})


router.post('/',async(req, res)=>{
    try {
        const {name,price,description} = req.body
    
        const productInfo = {
            name,
            price,
            description
        }
        const Products = new ProductDao('products.json')
        const newProduct = await Products.create(productInfo)
    
        res.json({mesagge: newProduct })   
    } catch (error) {
        res.status(500).json({error})
    }
})

module.exports = router