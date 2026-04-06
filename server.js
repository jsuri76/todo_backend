const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 
require("dotenv").config(); 
const todoRoutes = require("./routes/todoRoutes"); 
const app = express(); 
app.use(cors({ origin: ["http://localhost:3000","https://todobysuri.netlify.app/"] })); 
app.use(express.json()); 
app.use("/todos", todoRoutes); 
mongoose 
.connect(process.env.URI) 
.then(() => { 
console.log("MongoDB connected"); 
}) 
  .catch((err) => { 
    console.log(`Error occured:${err}`); 
  }); 
 
const port = process.env.PORT || 8000; 
app.listen(port, () => { 
  console.log(`Server running at: http://localhost:${port}`); 
}); 