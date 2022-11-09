const mongoose = require('mongoose')
// mongoose helps us to connect node js to mongodb
const express = require('express')
const routers =require("./routes")
const app = express()

const link ="mongodb+srv://royolaruth2022:<password>@nattabiruth.owevmvw.mongodb.net/test"
const port = 3000;

// app.get('/',(req,res)=>{
//     res.status(200).send({
//         'message':'welcome to server'
//     });
// })

app.use('/', routers)
mongoose.connect(link,()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
}).catch(error=>console.log(error))

