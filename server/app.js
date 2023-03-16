const express = require('express')
const app= express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} =require('./keys')

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/posts'))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log('connected mongo yeahhhhh')
})
mongoose.connection.on('error',()=>{
    console.log('err connecting',err)
})
// mongo_atlas_database_password: IXlkDaaBzkuaOBwy


app.get('/',(req,res)=>{
    res.send("hello world")
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})