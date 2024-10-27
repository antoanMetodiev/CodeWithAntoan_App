const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");

const corsOptions = {
    origin: ['http://localhost:5173', "http://localhost:3333"],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);
app.get('/', (req, res) => {
    res.send("LMAOO!!");
});

const PORT = 3333;
mongoose.connect("mongodb://localhost:27017/CodeWithAntoan")
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is listening on PORT 3333!!!");
            console.log("Mongo DB is started..");
        });
    });

