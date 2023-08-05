require('dotenv').config();


const clientRoute = require('./routes/clientRoutes')
const profileRoute = require('./routes/profileRoutes')
const publicRoute = require('./routes/publicProfile')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Server Started at Port No. ${process.env.PORT}`)
        })
        console.log(`Database Connected ${process.env.MONGODB_URI}`)
    })
    .catch((error)=>{
        console.log(error);
    })

app.use("/api/public", publicRoute);
app.use("/api/profile", profileRoute);
app.use("/api/client", clientRoute);