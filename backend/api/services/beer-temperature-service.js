'use strict';
const repository = require('../repository/beer-temperature-repository');

function getAllBeerTemperatures() {
    return repository.getAllBeerTemperatures();
}

module.exports = {
    getAllBeerTemperatures: getAllBeerTemperatures
};
