const express = require('express')

//const todoSchema = require('../models/todoschema')
const router = express.Routers();


router.post("/todos",(req,res) => {
    console.log(req.body)
})