'use strict';

const controller = require('../controllers/controller');

module.exports = (app) => {
app.route('/about').get(controller.about);
app.route('/distance/:zipcode1/:zipcode2').get(controller.getDistance);
app.route('/aboutDistance').get(controller.aboutDistance);
app.route('/loaddb').get(controller.loadDB);
}