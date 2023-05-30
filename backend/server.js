const express = require('express')
const products = require('./data/products')


const app = express()

app.get('/', (req, res)=>{
    res.send('API is running')
})

app.get('/api/products', (req, res)=>{
    res.json(products)
})

app.get('/api/products/:id', (req, res)=>{
    const product = products.find((item)=> item._id === req.params.id)
    res.json(products)
})


app.listen(3002, console.log("run on port 3001"))