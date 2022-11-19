const express = require("express");
const bodyparser = require("body-parser");
const http = require("http");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const dburl =
  "mongodb+srv://superbatata:181JMT1578@ahk-net.jlqombk.mongodb.net/?retryWrites=true&w=majority";

const dbClient = new MongoClient(dburl, { useNewUrlParser: true });

dbClient.connect((erro) => {
  if (erro) throw erro;
});

const app = express();

app.use(bodyparser.json());
var cors = require("cors");


const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  res.send("welcome user one!");
});

app.post("/user", (req, res) => {
  console.log("ajouter user ");
  dbClient.db("ahk-net").collection("users").insertOne(req.body);
  res.send("user ajouter avec succes");
});
app.use(cors());

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
