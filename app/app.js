const express = require("express");
const router = require("../router/router");
const app = express();

// middleware
app.use(express.json());
// req.body.username req.body.password

// service actuator
app.get("/", (req,res)=>{
    res.status(200).json({message: 'Service is up'});
});

// middleware to define my router
app.use("/exercise", router);

module.exports = app;