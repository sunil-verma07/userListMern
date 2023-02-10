const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const user = require('./route.js') 

app.use(cors())
mongoose.set("strictQuery", false);

mongoose
.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then((data) => {
  console.log(`Mongodb connected with server: ${data.connection.host}`);
});

app.use('/v1/user',user)

app.listen(5000,()=>{
    console.log(`server is running at port 4000`)
})