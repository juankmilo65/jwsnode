
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PagoServicioSchema = new Schema({
  Empresa:{type:String},
  NumServicio:{type: String},
  Monto:{type: String},
  created_date: {
    type: Date,
    default: Date.now
  },
});
module.exports = mongoose.model('PagoServicio', PagoServicioSchema);