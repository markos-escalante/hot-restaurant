const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const customers = [];

app.get("/", function(req,res) {
    res.sendFile(path.join(_dirname, "main.html"))
});

app.get("/tables", function(req,res) {
    res.sendFile(path.join(_dirname, "tables.html"))
});

app.get("/reservation", function(req,res) {
    res.sendFile(path.join(_dirname, "reservation.html"))
});

app.post("/tables", function(req, res) {

  const newCustomer = req.body;

  //newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCustomer);

  customers.push(newCustomer);

  res.json(newCustomer);
});

app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});