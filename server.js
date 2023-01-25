const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.json({
        "name":"Abhijeet",
        "age":20
    })
})

app.listen(process.env.PORT,(req,res)=>{
    console.log('server is listening')
})