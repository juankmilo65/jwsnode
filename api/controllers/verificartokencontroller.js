"use strict";

const jwt = require("jsonwebtoken");
const signature = "MySuP3R_z3kr3t";

//Formato del token
//Authorization: Bearer <Token>

exports.verificarToken = function(req, res) {
  console.log("entro");
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, signature, (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.valid = true;
        req.token = bearerToken;
      }
    });
  } else {
    //Forbiden
    res.sendStatus(403);
  }
};
