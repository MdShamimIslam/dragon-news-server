const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

const cors = require('cors');

app.use(cors());

app.get('/', (req,res)=>{
    res.send('News API is running...')
})

app.get('/categories', (req,res)=>{
    res.send(categories);
})

app.listen(port, ()=>{
   console.log('News API is running on port:', port);
})