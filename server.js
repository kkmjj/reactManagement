const fs =require('fs');
const express = require('express');
const bodyParser =require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// 파일 받아서 json으로파싱하고 mysql에서 받아오기 
const data =fs.readFileSync('./database.json');
const conf =JSON.parse(data);
const mysql =require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

// client가 customers api에 들어오면
app.get('/api/customers', (req,res)=>{
   connection.query(
     "select * from customer",
      (err,rows,fields) =>{
        res.send(rows);
      }
      
   );

});


app.listen(port, () => console.log('Listen'+{port}));