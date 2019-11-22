const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var cors = require('cors');
const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',(req,res,next)=>{
    console.log(`${req.url} ${req.method}`);
    next();
})
;

app.get('/news',(req,res,next)=>{
    let data = req.query.cat;
    let dd ='TV%20&%20Showbiz';
   
    console.log(decodeURI(req.query.cat))
    
    let rawdata = fs.readFileSync('../items.json');
let student = JSON.parse(rawdata);
let catData = [];
if (data)
{
    student.map(res=>{
        if(res.category == decodeURIComponent(data)){
            catData.push(res);
        }
    })
    res.jsonp(catData);
}
else {
    res.jsonp(student);
}

})

app.listen(PORT,console.log(`I am loving @ ${PORT}`));