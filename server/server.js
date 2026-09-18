require("dotenv").config();

const express = require ("express"); //Hum Express package ko project mein load kar rahe hain.

const healthRoutes = require ('./routes/healthRoutes'); 

const app = express(); //Express ka application/server object create kar rahe hain.(app hamare backend ka main object hai.)

// app hamare backend ka main object hai.
// +-- 
// app.get(), 
// app.post(), 
// app.put(), 
// app.delete() 
// --+
// jaise routes isi app se banenge.

const PORT = process.env.PORT || 5000; //Backend kis port par chalega, wo define kar rahe hain.

// req = Client/browser se jo request aa rahi hai.
// res = Server client ko jo answer bhejega.
// ===============================


// HOME / ROOT ROUTE
// ===============================

app.get("/", (req, res) => { 
    // Jab browser GET request ke saath / route par aaye, ye function run karo. 
    // For example: (GET http://localhost:5000/)

  res.send("Printing Press SaaS API is running!"); // Server browser ko text bhej raha hai.

});


// ===============================
// HEALTH CHECK API
// ===============================

app.use("/api", healthRoutes);


// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => { // Express ko bol rahe hain = (Port 5000 par server start karo.)

  console.log(`Server running on http://localhost:${PORT}`); //Terminal mein server URL print hoga.

});