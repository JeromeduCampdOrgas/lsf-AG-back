const express = require("express");
const helmet = require("helmet");
require("dotenv").config();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const path = require("path");

//const donRoutes = require("./routes/donRoutes");
const userRoutes = require("./routes/userRoutes");
const resourcesRoutes = require("./routes/resourcesRoutes");
const chargesRoutes = require("./routes/chargesRoutes");
const autresChargesRoutes = require("./routes/autresChargesRoutes");

const app = express();

app.use(helmet());

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER +
      ":" +
      process.env.DB_PASS +
      "@" +
      process.env.DB_URI +
      "/" +
      process.env.DB_NAME +
      "?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

//app.use("/api/dons", donRoutes);
app.use("/api/users", userRoutes);
app.use("/api/resources", resourcesRoutes);
app.use("/api/charges", chargesRoutes);
app.use("/api/autresCharges", autresChargesRoutes);

module.exports = app;
