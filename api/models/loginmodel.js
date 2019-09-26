"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TokenSchema = new Schema({
  user: { type: String },
  pass: { type: String },
  data: { type: String }
});

module.exports = mongoose.model("Token", TokenSchema);
