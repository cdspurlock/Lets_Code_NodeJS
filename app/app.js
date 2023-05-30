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

app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

module.exports = app;