const express = require('express');
require('dotenv').config();
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const connect = require('./config/db');
const homeRouter = require('./routers/homeRouter');
const authRouter = require('./routers/authRouter');

const app = express();
const PORT = process.env.PORT || 3300
//connect Database
connect();
//set ejs engine
app.use(expressLayout);
app.set('view engine','ejs');
//staticfiles config
app.use(express.static(path.join(__dirname+'/public/')))
//config route
app.use(homeRouter);
app.use(authRouter)

app.listen(PORT,()=>{
    console.log(`server starting at ${PORT}`);
})