"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var PING_LISTEN_PORT = 8080;
// app.get("/", (req, res) => {
//   res.send("This is a test web page !");
// });
///////////////HOME PAGE////////////////////////
app.get('/', function (req, res) {
    res.send('Ca marche !');
});
////////////////////////////////////////////////
///////////////////HEADER PING///////////////////
app.get("/ping", function (req, res) {
    res.send(req.headers);
});
////////////////////////////////////////////////
//////////////////404 NOT FOUND///////////////////
app.all('*', function (req, res) {
    res.status(404).send();
});
//////////////////////////////////////////////////
app.listen(8080, function () {
    console.log("L'application ecoute sur le port 8080!");
});
