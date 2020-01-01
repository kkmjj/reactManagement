const express = require('express');
const bodyParser =require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// client가 customers api에 들어오면
app.get('/api/customers', (req,res)=>{
    res.send([{
        'name': '홍길동',
        'birthday': '931201'
      
      },
      {
        'name': '김민준',
        'birthday': '941201'
      
      }]);

});


app.listen(port, () => console.log('Listen'+{port}));