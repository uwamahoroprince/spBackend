const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./src/config/db");
const cors = require("cors");

const services = require("./src/routes/service");
const serviceRequest = require("./src/routes/serviceRequests");
const station = require("./src/routes/station");
const user = require("./src/routes/user");
const auth = require("./src/routes/auth");
const fuelServiceRequest = require("./src/routes/fuelServiceRequest");

const app = express();
const PORT = process.env.PORT;
//loading middlewares
app.use(express.json());
app.use(cors());
//excuting routes
app.use("/SP/service", services);
app.use("/SP/serviceRequest", serviceRequest);
app.use("/SP/station", station);
app.use("/SP/register", user);
app.use("/SP/auth", auth);
app.use("/SP/fuelServiceRequest", fuelServiceRequest);
//LOADING DOTENV FILE
dotenv.config({ path: "./src/config/config.env" });
dbConnect();
app.listen(PORT, () => {
  console.log(`application started http://localhost:${PORT}`);
});
