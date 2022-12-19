require("dotenv").config()
const express = require("express");
const db = require('./db');

const morgan = require("morgan");
const app = express();


app.use(express.json());

//get all Offers
app.get("/api/v1/offers", async (req,res) => {

    try{
        const offers = await db.query('Select * from offer')
        console.log(offers);
        res.status(200).json({
         status: "success",
         offers: offers.rows.length,
         data: {
             Angebote: offers.rows,
         },
        });
    }catch (err) {
        console.log(err);
    } 
});

//Get a Offer Mail als id
app.get("/api/v1/offers/:offerid", async (req,res) => {
    console.log(req.params.offerid);

    try{
        const oneoffer = await db.query(
            'select * from offer where offerid = $1', [req.params.offerid]);
            console.log(oneoffer);
            res.status(200).json({
        status: "succes",
        data: {
            Angebot: "Angebot1",
        },
    });

    }catch(err){
        console.log(err)
    };
    
});


//Create an offer

app.post("/api/v1/offers", async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "INSERT INTO public.offer (datum, anfahrtszeit, abfahrtszeit, abfahrtsort, abfahrtsplz, ) values ($1, $2, $3, $4, $5) returning *",
        [req.body.datum, req.body.anfahrtszeit, req.body.abfahrtszeit, req.body.abfahrtsort, req.body.anfahrtsplz]
      );
      console.log(results);
      res.status(201).json({
        status: "succes",
        data: {
          offers: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
  

// Update offer 
app.put("/api/v1/offers/:offerid", async (req, res) => {
    try {
      const results = await db.query(
        "UPDATE offer SET datum = $1, anfahrtszeit = $2, abfahrtszeit = $3, abfahrtsort = $4, abfahrtsplz = $5 where id = $4 returning *",
        [req.body.datum, req.body.anfahrtszeit, req.body.abfahrtszeit, req.body.abfahrtsort, req.body.anfahrtsplz, req.params.id]
      );
  
      res.status(200).json({
        status: "succes",
        data: {
          retaurant: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
    console.log(req.params.id);
    console.log(req.body);
  });

//Delete one offer
app.delete("/api/v1/offers/:offerid", (req,res) => {
    res.status(204).json({
        status: "succes",
    });
});

//Accounterstellung

app.post("http://localhost:4000/api/v1/createuser", async (req, res) => {
    console.log(req.body);
  const {userid, vorname, nachname, matrikelnummer, plz, ort, strasse, hausnummer, studiengang, passwort} = req.body;
    try {
      const results = await db.query(
        "insert into public.user (userid, vorname, nachname, matrikelnummer, plz, ort, strasse, hausnummer, studiengang, passwort) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *",
        [userid, vorname, nachname, matrikelnummer, plz, ort, strasse, hausnummer, studiengang, passwort]);
        console.log(results);
        res.status(201).json({
          status: "succes",
          data: {
            restaurant: results.rows[0],
          },
        });
      } catch (err) {
        console.log(err);
      }
    });
  
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
});
