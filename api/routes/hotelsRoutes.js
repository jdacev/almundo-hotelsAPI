'use strict';

module.exports = function(app) {
	var hotel = require('../controllers/hotelController');

	// hotel Routes
	app.route('/v1/hotels')
		.get(hotel.list_all)
		.post(hotel.create);

	app.route('/v1/hotelsByCriteria')
		.post(hotel.list_by_criteria)

	app.route('/v1/hotels/:hotelId')
		.get(hotel.read)
		.put(hotel.update)
		.delete(hotel.delete);
};
