const express = require('express');
const app = express();
const hbs = require('hbs');
let port = 5000;
const path = require('path');

 
app.use(express.static(path.join(__dirname, '../public')));
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set('views', templatePath);
hbs.registerPartials(partialsPath);
// app.use(express.static(staticPath));

app.get('/', (req,res) =>{
    res.render('index',{name:"atul"});

});
app.get('/about', (req,res) =>{
    res.render("about");

});
app.get('/', (req,res) =>{
    res.send("hello world from home page");
});
app.get("/about/*" ,(req,res)=>{
    res.render("404",{
        errorcomment:"oppps enter about your page not found."
    });
});
app.get("*" ,(req,res)=>{
    res.render("404",{
        errorcomment:"oppps enter url not found your webpage please check the url."
    });
});
app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
});