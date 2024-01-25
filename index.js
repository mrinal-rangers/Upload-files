const path = require('path');
const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const app= express();
const port = 8000;

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    return res.render('homepage.ejs');
})


app.post('/upload',upload.single('profileImage'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    return res.redirect('/');
})

app.listen(port,()=>console.log(`server started on port = ${port}`));