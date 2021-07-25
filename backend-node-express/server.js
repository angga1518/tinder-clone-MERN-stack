import express from "express";
import mongoose from "mongoose"
import Cards from "./model/cards.js";
import Cors from "cors"

// App Config
const app = express();
const port = process.env.port || 8001;
const connection_url = "mongodb+srv://admin:sLAhgTVF6kuBQAWr@tinder-clone-cluster.eylm8.mongodb.net/tinderDB?retryWrites=true&w=majority"

// Middlewares
app.use(express.json())
app.use(Cors())

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.get("/card", (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});
app.post("/card", (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))