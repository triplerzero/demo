const express =require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const apiRouter=express.Router();
const axios=require('axios');
const app=express();
app.use(bodyParser());
app.use(cookieParser());
app.use('/user',require('./user'));

apiRouter.get('/getEssenceApi',(req,res)=>{
  //允许跨域
  console.log(req.query.type)
  let type=req.query.type;
  res.setHeader('Access-Control-Allow-Origin','*');
  axios({
    method:'get',
    url:`http://api.budejie.com/api/api_open.php?a=list&c=data&type=${type}`
  }).then((response)=>{
    res.json(response.data)
  })

})
app.use('/api',apiRouter);

app.listen(3000);
