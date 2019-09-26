
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecargaSchema = new Schema({
  Compania:{type:String},
  Telefono:{type: String},
  Monto:{type: String},
  created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Recarga', RecargaSchema);
 