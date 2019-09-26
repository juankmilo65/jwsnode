// app.js
require("dotenv").config();
const jwt = require("njwt");
const http = require("http");
var express = require("express"),
  app = express(),
  port = process.env.PORT;
dbname = process.env.DB_NAME;
hostname = process.env.HOST;
mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

const server = http.createServer(app);

//Tablas y rutas
let Task = require("./api/models/todolistmodel");
var taskroute = require("./api/routes/todolistroute");
let registro = require("./api/models/registromodel");
var registroroute = require("./api/routes/registroroute");
let recarga = require("./api/models/recargamodel");
var recargaroute = require("./api/routes/recargaroute");
let pagoservicio = require("./api/models/pagoserviciomodel");
var pagoservicioroute = require("./api/routes/pagoservicioroute");
let loginervicio = require("./api/models/loginmodel");
var loginservicioroute = require("./api/routes/loginrouter");

bodyParser = require("body-parser");
mongoose.Promise = global.Promise;

let dev_db_url =
  "mongodb+srv://test:test@cluster0-yq5tn.mongodb.net/test?retryWrites=true&w=majority";
let mongoDB = dev_db_url;
mongoose.set("useUnifiedTopology", true);
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
server.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var RuteadorRaiz = express.Router();
var Ruteador = express.Router();
RuteadorRaiz.get("/", function(req, res) {
  res.send("Indique el metodo GET que desea consultar!");
});
RuteadorRaiz.post("/", function(req, res) {
  res.send("Indique el metodo POST que desea consultar!");
});

app.use(RuteadorRaiz);

//module.exports(token);
// Express middleware that allows POSTing data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

taskroute(app); //register the route
registroroute(app); //register the route
recargaroute(app); //register the route
pagoservicioroute(app); //register the route
loginservicioroute(app); //register the route

app.use((req, res, next) => {
  res.header("Content-Type", "application/json");
  next();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  //res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS, PUT");
  //res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header("Allow", "GET");
  next();
});

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use("/", Ruteador);
