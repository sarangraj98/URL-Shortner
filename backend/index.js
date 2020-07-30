const express = require('express');
const app = express();
const cors = require('cors');
const randomize = require('randomatic');


app.use(cors());

var database = [];

app.get('/',(req,res)=>{
    const url_data = req.query.url;
    const rand = randomize('a',5);
    const shortend_url = 'http://localhost:3001/short?id='+rand;
    database.push({name:url_data,id:rand});
    console.log(database);
    res.send(shortend_url);
})

app.get('/short',(req,res)=>{
    const id = req.query.id
    var url ='';
    const search =  database.map(item=>{
        if(item.id==id)return url=item.name
        
    })
    if(url!='')return res.redirect(url);
    res.send('Error')
    

})

app.listen(3001,()=>console.log("Server Started"))