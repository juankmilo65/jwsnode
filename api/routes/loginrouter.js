"use strict";

module.exports = function(app) {
  var token = require("../controllers/logincontroller");

  // token Routes
  app.route("/login/").post(token.create_token);
  app.route("/validarpermiso/").post(token.inicio_sesion);
  app.route("/recuperarcontrasena/").post(token.recuperar_contrasena);
};
