const express = require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("yov bro")
})

router.get('/signup',(req,res)=>{
    res.send("hi")
})

router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!email||!password||!name){
        res.status(422).json({error:"please add all feilds"})
    }
    res.json({message:"succesfully posted"})
})

module.exports=router