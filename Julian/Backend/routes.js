// Get all Offers (Offene Fahrten an einem bestimmten Tag)

app.get("/api/v1/getalloffers", async (req,res) => {

  try{
      const getoffers = await db.query(
        'Select * from public.offer');
        console.log(getoffers);
        res.status(200).json({
        status: "success",
        offers: offers.rows.length,
          data: {
          results: getoffers.rows,
          },
        });
      }
        catch (err) {
          console.log(err);
        } 
});


// Get one Offer (Mail als id)

app.get("/api/v1/offers/:offerid", async (req,res) => {
  console.log(req.params.offerid);

    try{
        const oneoffer = await db.query(
          'select * from public.offer where offerid = $1', [req.params.offerid]);
          console.log(oneoffer);
          res.status(200).json({
          status: "succes",
            data: {
              results: oneoffer.rows[0]
            }
          });
        }
          catch(err){
            console.log(err)
          };  
});

// Get one booking

app.get("/api/v1/bookings/:bookingid", async (req,res) => {
  console.log(req.params.bookingid);

    try{
        const onebooking = await db.query(
          'select * from public.booking where bookingid = $1', [req.params.bookingid]);
          console.log(onebooking);
          res.status(200).json({
          status: "succes",
            data: {
              results: onebooking.rows[0]
            }
          });
        }
          catch(err){
            console.log(err)
          };  
});

// Get Userverification

app.get("/api/v1/userverification/:userverificationid", async (req,res) => {
  console.log(req.params.userid);

    try{
        const userverification = await db.query(
          'select * from public.user where userid = $1', [req.params.userid]);
          console.log(userverification);
          res.status(200).json({
          status: "succes",
            data: {
              results: userverification.rows[0]
            }
          });
        }
          catch(err){
            console.log(err)
          };  
});


// Create an Account

app.post("/api/v1/createuser", async (req, res) => {
  console.log(req.body);

  const {userid, vorname, nachname, matrikelnummer, plz, ort, strasse, hausnummer, studiengang, passwort} = req.body;

    try{

      const createuser = await db.query(
        "INSERT into public.user (userid, vorname, nachname, matrikelnummer, plz, ort, strasse, hausnummer, studiengang, passwort) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *",
        [userid, vorname, nachname, matrikelnummer, plz, ort, strasse, hausnummer, studiengang, passwort]
        );
        console.log(createuser);
        res.status(201).json({
          status: "succes",
          data: {
            results: createuser.rows[0],
          },
        });
      } 
        catch (err) {
          console.log(err);
        }
});


// Create an offer

app.post("/api/v1/createoffer", async (req, res) => {
  console.log(req.body);

  const {datum, anfahrtszeit, abfahrtszeit, abfahrtsort, abfahrtsplz} = req.body;
  
    try{
        const createoffer = await db.query(
          "INSERT into public.offer (datum, anfahrtszeit, abfahrtszeit, abfahrtsort, abfahrtsplz) values ($1, $2, $3, $4, $5) returning *",
          [datum, anfahrtszeit, abfahrtszeit, abfahrtsort, abfahrtsplz]
          );
          console.log(createoffer);
          res.status(201).json({
            status: "succes",
            data: {
              results: createoffer.rows[0],
            },
          });
        } 
          catch (err) {
            console.log(err);
          }
});
  
// Create a booking

app.post("/api/v1/createbooking", async (req, res) => {
  console.log(req.body);

  const {} = req.body;
  
    try{
        const createbooking = await db.query(
          "INSERT into public.booking () values () returning *",
          []
          );
          console.log(createbooking);
          res.status(201).json({
            status: "succes",
            data: {
              results: createbooking.rows[0],
            },
          });
        } 
          catch (err) {
            console.log(err);
          }
});


// Update offer

app.put("/api/v1/offers/:offerid", async (req, res) => {
    
  const {datum, anfahrtszeit, abfahrtszeit, abfahrtsort, abfahrtsplz, plaetzefrei, plaetzebelegt} = req.body;

  try{
      const updateoffer = await db.query(
        "UPDATE public.offer SET datum = $1, anfahrtszeit = $2, abfahrtszeit = $3, abfahrtsort = $4, abfahrtsplz = $5, plaetzefrei = $6, plaetzebelegt = $7 where offerid = $8 returning *",
        [datum, anfahrtszeit, abfahrtszeit, abfahrtsort, abfahrtsplz, plaetzefrei, plaetzebelegt, req.params.offerid]
        );
        res.status(200).json({
          status: "succes",
          data: {
            results: updateoffer.rows[0],
          },
        });
      } 
        catch (err) {
          console.log(err);
        }

    console.log(req.params.offerid);
    console.log(req.body);
});


// Update User

app.put("/api/v1/user/:userid", async (req, res) => {
    
  const {vorname, nachname, matrikelnummer, plz, ort, strasse, hausnummer, studiengang, passwort} = req.body;

  try{
      const updateuser = await db.query(
        "UPDATE public.user SET vorname = $1, nachname = $2, matrikelnummer = $3, plz = $4, ort = $5, strasse = $6, hausnummer = $7, studiengang = $8, passwort = $9 where offerid = $10 returning *",
        [vorname, nachname, matrikelnummer, plz, ort, strasse, hausnummer, studiengang, passwort, req.params.userid]
        );
        res.status(200).json({
          status: "succes",
          data: {
            results: updateuser.rows[0],
          },
        });
      } 
        catch (err) {
          console.log(err);
        }

    console.log(req.params.userid);
    console.log(req.body);
});


// Delete one offer

app.delete("/api/v1/offers/:offerid", async (req,res) => {

  try{
      const deleteoffer = db.query(
        "DELETE from public.offer where id = $1", [req.params.offerid]
        );
        res.status(204).json({
          status: "succes",
          data: {
            results: deleteoffer.rows[0],
          }
        });
      }  
        catch (err){
          console.log(err);
        }
});


// Delete one booking

app.delete("/api/v1/bookings/:bookingid", async (req,res) => {

  try{
      const deletebooking = db.query(
        "DELETE from public.booking where id = $1", [req.params.bookingid]
        );
        res.status(204).json({
          status: "succes",
          data: {
            results: deletebooking.rows[0]
          }
        });
      }  
        catch (err){
          console.log(err);
        }
});