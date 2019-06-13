'use strict';
const repository = require('../repository/beer-temperature-repository');

function getAllBeerTemperatures() {
    return repository.getAllBeerTemperatures();
}

function getBeerByName(name) {
    return repository.getBeerByName(name);
}

function getAllBeers() {
    return repository.getAllBeers();
}

module.exports = {
    getAllBeerTemperatures: getAllBeerTemperatures,
    getBeerByName: getBeerByName,
    getAllBeers: getAllBeers
};
