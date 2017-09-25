'use strict';

var mongoose = require('mongoose'),
Hotel = mongoose.model('Hotel');


exports.list_all = function(req, res) {
  Hotel.find({}, function(err, hotel) {
    if (err)
      res.send(err);
    res.send({ 'hotels':  hotel})
  });
};

exports.list_by_criteria = function(req, res) {
  console.info(req.body);
  Hotel.find( req.body , function(err, hotel) {
    if (err)
      res.send(err);
    res.send({ 'hotels':  hotel})
  });
};


exports.read = function(req, res) {
  Hotel.findById(req.params.hotelId, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};


exports.create = function(req, res) {
  var new_hotel = new Hotel(req.body);
  new_hotel.save(function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};


exports.update = function(req, res) {
  Hotel.findOneAndUpdate({_id:req.params.hotelId}, req.body, {new: true}, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};


exports.delete = function(req, res) {
  Hotel.remove({
    _id: req.params.hotelId
  }, function(err, hotel) {
    if (err)
      res.send(err);
    res.json({ message: 'Hotel successfully deleted' });
  });
};