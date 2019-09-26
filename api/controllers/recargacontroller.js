
'use strict';

var mongoose = require('mongoose'),
Recarga = mongoose.model('Recarga');

exports.list_recarga = function(req, res) {
    Recarga.find({}, function(err, recarga) {
    if (err)
      res.send(err);
    res.json(recarga);
  });
};

exports.create_recarga = function(req, res) {
  var new_recarga = new Recarga(req.body);
  new_recarga.save(function(err, recarga) {
    if (err)
      res.send(err);
    res.json(recarga);
  });
};

exports.read_recarga = function(req, res) {
    Recarga.findById(req.params.recarga_id, function(err, recarga) {
    if (err)
      res.send(err);
    res.json(recarga);
  });
};

exports.update_recarga = function(req, res) {
    Recarga.findOneAndUpdate({_id: req.params.recarga_id}, req.body, {new: true}, function(err, recarga) {
    if (err)
      res.send(err);
    res.json(recarga);
  });
};

exports.delete_recarga = function(req, res) {
    Recarga.remove({
    _id: req.params.recarga_id
  }, function(err, recarga) {
    if (err)
      res.send(err);
    res.json({ message: 'Recargasuccessfully deleted' });
  });
};