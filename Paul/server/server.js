require("dotenv").config();
const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("our middlewear");
    next();
});

app.use((req, res, next) => {
    res.status(404).json({
        status: "fail"
    })
});

// Get all Offers 
app.get("/api/v1/offers", (req, res) => {
    console.log("route")
    res.status(200).json({
        status: "success",
        data: {
             offer: ["Angebot1", "Angebot2"],
        }
    })
});

// Get a Offer
app.get("/api/v1/offers/:id", (req, res) => {
    console.log(req.params);
});


// Create a Offer

app.post("/api/v1/offers", (req, res) => {
    console.log(req)
})
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});
