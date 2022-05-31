const express =require('express')
const app=express()
app.get('',(req,res)=>{
    res.send('Hello express!')
})
app.get('/help',(req,res)=>{
    res.send('Help page!')
})
app.get('/about',(req,res)=>{
    res.send('About page!')
})

app.listen(3000,()=>{
    console.log('server is up on port 3000')
})
/Users/nirob/mongodb/mongodb/bin/mongod.exe --dbpath=/Users/nirob/mongodb-data