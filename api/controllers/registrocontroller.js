"use strict";

var mongoose = require("mongoose"),
  Registro = mongoose.model("Registro");

exports.list_registro = function(req, res) {
  Registro.find({}, function(err, registro) {
    if (err) res.send(err);
    res.json(registro);
  });
};

exports.create_registro = function(req, res) {
  var new_registro = new Registro(req.body);
  new_registro.save(function(err, registro) {
    if (err) res.send(err);
    res.json(registro);
    //res.send('status: 1');
  });
};

exports.read_registro = function(req, res) {
  Registro.findById(req.params.registro_id, function(err, registro) {
    if (err) res.send(err);
    res.json(registro);
  });
};

exports.update_registro = function(req, res) {
  Registro.findOneAndUpdate(
    { _id: req.params.registro_id },
    req.body,
    { new: true },
    function(err, registro) {
      if (err) res.send(err);
      res.json(registro);
    }
  );
};

exports.delete_registro = function(req, res) {
  Registro.remove(
    {
      _id: req.params.recarga_id
    },
    function(err, registro) {
      if (err) res.send(err);
      res.json({ message: "Registro deleted" });
    }
  );
};
