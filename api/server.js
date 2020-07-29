const express = require('express');
const helmet = require("helmet");

const CarsRouter = require("../cars/cars-router");

const server = express();   

server.use(helmet());
server.use(express.json());

server.use("/api/cars", CarsRouter);

server.use("/", (req,res)=>{
    res.json({
        api: 'Up and running'
    })
})

module.exports = server;