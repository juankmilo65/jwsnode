"use strict";

const validar = require("./verificartokencontroller");
const email = require("./enviaremailcontroller");
var crypto = require("crypto");

const jwt = require("jsonwebtoken");
const signature = "MySuP3R_z3kr3t";
const expiration = "6h";

exports.create_token = function(req, res) {
  console.log("valido");
  var data = req.body;
  jwt.sign({ data }, signature, { expiresIn: expiration }, (err, token) => {
    res.json({ token, status: "1" });
  });
};

exports.inicio_sesion = function(req, res) {
  var data = req.body;
  validar.verificarToken(req, res);
  if (req.valid) {
    res.json({ token: req.token, status: "1" });
  }
};

exports.recuperar_contrasena = function(req, res) {
  var data = req.body;
  email.enviaremail(req, res);
};
