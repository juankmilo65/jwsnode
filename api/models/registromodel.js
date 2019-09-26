'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegistroSchema = new Schema({
  
  Usuario:{type: String},
  Contrasenia:{type: String},
  Data:{type: String},
  created_date: {
    type: Date,
    default: Date.now
  },
});
module.exports = mongoose.model('Registro', RegistroSchema);
 