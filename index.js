const path = require('path');
const express = require('express');

const app= express();
const port = 8000;

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.use(express.json());

app.get('/',(req,res)=>{
    return res.render('homepage.ejs');
})

app.listen(port,()=>console.log(`server started on port = ${port}`));