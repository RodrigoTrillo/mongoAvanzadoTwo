const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')
const handlebars = require('express-handlebars')
const {port}= require('./config')

const app = express()

app.use(express.json())

router(app)

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://RodrigoTrillo:Rolly1560@clustercoder.gkuf5cv.mongodb.net/40305-mongo-avanzado?retryWrites=true&w=majority', error =>{
    if(error){
        console.log(`Error: ${error}`)
    }else{
        console.log('db is connected')
    }
})


app.engine('handlebars', handlebars.engine())

app.set('views', __dirname + '/views')

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))


app.listen(port, ()=>{
    console.log(`server running at port ${port}`)
})