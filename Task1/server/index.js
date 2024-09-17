const express = require('express');
const connectDB = require('./database/Conection');
const router = require('./Controller/routehandler');
require('dotenv').config();

const app = express();
app.use(express.json());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
  });

app.use('/api', router);
app.listen(process.env.PORT, () => {
  console.log('Server is running on port 5000');
});


connectDB();

