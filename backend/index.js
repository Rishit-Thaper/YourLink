require('dotenv').config();


const user = require('./routes/userRoutes')
const link = require('./routes/linkRoutes')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
app.use(express.json());

app.use(cors())
mongoose.connect(process.env.MONGODB_URI,{UseNewUrlParser: true, UseUnifiedTopology: true})
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Server Started at Port No. ${process.env.PORT}`)
        })
        console.log(`Database Connected ${process.env.MONGODB_URI}`)
    })
    .catch((error)=>{
        console.log(error);
    })

    app.use('/link', link);
    app.use('/user', user);