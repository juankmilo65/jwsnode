
'use strict';

var mongoose = require('mongoose'),
PagoServicio = mongoose.model('PagoServicio');

exports.list_pagoservicio = function(req, res) {
    PagoServicio.find({}, function(err, pagoservicio) {
    if (err)
      res.send(err);
    res.json(pagoservicio);
  });
};

exports.create_pagoservicio = function(req, res) {
  var new_pagoservicio = new PagoServicio(req.body);
  new_pagoservicio.save(function(err, pagoservicio) {
    if (err)
      res.send(err);
    res.json(pagoservicio);
  });
};

exports.read_pagoservicio = function(req, res) {
    PagoServicio.findById(req.params.pagoservicio_id, function(err, pagoservicio) {
    if (err)
      res.send(err);
    res.json(pagoservicio);
  });
};

exports.update_pagoservicio = function(req, res) {
    PagoServicio.findOneAndUpdate({_id: req.params.pagoservicio_id}, req.body, {new: true}, function(err, pagoservicio) {
    if (err)
      res.send(err);
    res.json(pagoservicio);
  });
};

exports.delete_pagoservicio = function(req, res) {
    PagoServicio.remove({
    _id: req.params.recarga_id
  }, function(err, pagoservicio) {
    if (err)
      res.send(err);
    res.json({ message: 'Pagoservicio deleted' });
  });
};