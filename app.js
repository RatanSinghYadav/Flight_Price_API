const express = require('express');
const route = require('./routes/router.js');
const app = express();
require('./db/connect.js');

app.use(express.json());
app.use(route);
// app.get('/',(req,res)=>{
//     res.send("hello")
// })

app.listen(8000,()=>{
    console.log("server is running...")
}) 