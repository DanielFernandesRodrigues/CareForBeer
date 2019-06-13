'use strict';
const service = require('../services/beer-temperature-service');

function index() {
  return service.getAllBeerTemperatures();
}

module.exports = {
  index: index
};
