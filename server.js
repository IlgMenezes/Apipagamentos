const express = require('express');
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use('/api', require('./src/routes'));



app.listen(3001,function(){
  console.log('API INICIADA NA PORTA 3001') ;
});