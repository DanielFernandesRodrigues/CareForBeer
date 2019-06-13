'use strict';

const modelTemperature = require('../models/temperature');
const modelBeer = require('../models/beer');
const modelBeerTemperature = require('../models/beer-temperature');
const beers = [
    new modelBeer.Beer ('Pilsner', 4, 6 ),
    new modelBeer.Beer ('IPA', 5, 6 ),
    new modelBeer.Beer ('Lager', 4, 7 ),
    new modelBeer.Beer ('Stout', 6, 8 ),
    new modelBeer.Beer ('Wheat beer', 3, 5 ),
    new modelBeer.Beer ('Pale Ale', 4, 6 )
];

function getAllBeerTemperatures() {
    const dateNow = new Date();
    const beersTemperature = [];
    for (var i = 0, len = beers.length; i < len; i++) {
        const value = getRandomInt(beers[i].getMinTemperature() - 2, beers[i].getMaxTemperature());
        const temperature = new modelTemperature.Temperature(value, dateNow);
        beersTemperature.push(new modelBeerTemperature.BeerTemperature(temperature, beers[i]));
    }
    return beersTemperature;
}

function getBeerByName(name) {
    return beers.find(k => k.name === name);
}

function getAllBeers() {
    return beers;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    getAllBeerTemperatures: getAllBeerTemperatures,
    getBeerByName: getBeerByName,
    getAllBeers: getAllBeers
};
