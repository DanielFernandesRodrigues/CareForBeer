'use strict';

const chai = require('chai');
const service = require('../api/services/beer-temperature-service');
const modelTemperature = require('../api/models/temperature');
const modelBeerTemperature = require('../api/models/beer-temperature');

function baseTest(test) {
    console.log('\x1b[33m', `START test ${test.name}`);
    try {        
        console.log('\x1b[0m', test());
        console.log('\x1b[32m',`END test ${test.name} -- PASS`);
    } catch (error) {
        console.log('\x1b[31m', `END test ${test.name} -- ERROR -- ${error.message}`);
    }
    console.log('\x1b[0m',`-----------------------------------------`);
}

var getAllBeerTemperatures = function() {
    const beersTemperature = service.getAllBeerTemperatures();
    chai.expect(beersTemperature).to.have.length(6);
    return beersTemperature.length;
};

var getAllBeers = function() {
    const beers = service.getAllBeers();
    chai.expect(beers).to.have.length(6);
    return beers.length;
};

var getBeerByNamePilsner = function() {
    const beer = service.getBeerByName('Pilsner');
    chai.expect(beer.getMinTemperature()).to.be.equal(4);
    chai.expect(beer.getMaxTemperature()).to.be.equal(6);
    return beer;
};

var validateBeerTemperatureOutsideRangePilsner = function() {
    const beer = service.getBeerByName('Pilsner');
    const temperature = new modelTemperature.Temperature(1, new Date());
    const beerTemperature = new modelBeerTemperature.BeerTemperature(temperature, beer);
    chai.expect(beerTemperature.getOutsideRange()).to.be.true;
    return beerTemperature;
};

var validateBeerTemperatureInsideRangePilsner = function() {
    const beer = service.getBeerByName('Pilsner');
    const temperature = new modelTemperature.Temperature(6, new Date());
    const beerTemperature = new modelBeerTemperature.BeerTemperature(temperature, beer);
    chai.expect(beerTemperature.getOutsideRange()).to.be.false;
    return beerTemperature;
};

var validateAllBeersTemperatureOutsideRangeLessThanMin = function() {
    const beers = service.getAllBeers();
    const dateTime = new Date();
    beers.forEach(beer => {
        const temperature = new modelTemperature.Temperature(beer.getMinTemperature() - 1, dateTime);
        const beerTemperature = new modelBeerTemperature.BeerTemperature(temperature, beer);
        chai.expect(beerTemperature.getOutsideRange()).to.be.true;
    });
    return `all beers MIN invalid at ${dateTime}`;
};

var validateAllBeersTemperatureOutsideRangeGreaterThanMax = function() {
    const beers = service.getAllBeers();
    const dateTime = new Date();
    beers.forEach(beer => {
        const temperature = new modelTemperature.Temperature(beer.getMaxTemperature() + 1, dateTime);
        const beerTemperature = new modelBeerTemperature.BeerTemperature(temperature, beer);
        chai.expect(beerTemperature.getOutsideRange()).to.be.true;
    });
    return `all beers MAX invalid at ${dateTime}`;
};

var validateAllBeersTemperatureInsideRangeEqualMin = function() {
    const beers = service.getAllBeers();
    const dateTime = new Date();
    beers.forEach(beer => {
        const temperature = new modelTemperature.Temperature(beer.getMinTemperature(), dateTime);
        const beerTemperature = new modelBeerTemperature.BeerTemperature(temperature, beer);
        chai.expect(beerTemperature.getOutsideRange()).to.be.false;
    });
    return `all beers MIN valid at ${dateTime}`;
};

var validateAllBeersTemperatureInsideRangeEqualMax = function() {
    const beers = service.getAllBeers();
    const dateTime = new Date();
    beers.forEach(beer => {
        const temperature = new modelTemperature.Temperature(beer.getMaxTemperature(), dateTime);
        const beerTemperature = new modelBeerTemperature.BeerTemperature(temperature, beer);
        chai.expect(beerTemperature.getOutsideRange()).to.be.false;
    });
    return `all beers MAX valid at ${dateTime}`;
};

baseTest(getAllBeers);
baseTest(getAllBeerTemperatures);
baseTest(getBeerByNamePilsner);
baseTest(validateBeerTemperatureOutsideRangePilsner);
baseTest(validateBeerTemperatureInsideRangePilsner);
baseTest(validateAllBeersTemperatureOutsideRangeLessThanMin);
baseTest(validateAllBeersTemperatureOutsideRangeGreaterThanMax);
baseTest(validateAllBeersTemperatureInsideRangeEqualMin);
baseTest(validateAllBeersTemperatureInsideRangeEqualMax);
