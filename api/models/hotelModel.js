'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelSchema = new Schema({
  name: {
    type: String,
    Required: 'el nombre del Hotel es requerido.'
  },
  stars: {
    type: Number,
    min: 1, max: 5
  },
  price: {
    type: Number,
    default: 0
  }
});


module.exports = mongoose.model('Hotel', HotelSchema);