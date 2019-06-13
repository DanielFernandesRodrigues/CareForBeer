'use strict';

function BeerTemperature(temperature, beer) {
    this.temperature = temperature || null;
    this.beer = beer || null;
    return this;
}

BeerTemperature.prototype.getTemperature = function() {
    return this.temperature;
}

BeerTemperature.prototype.setTemperature = function(temperature) {
    this.temperature = temperature;
}

BeerTemperature.prototype.getBeer = function() {
    return this.beer;
}

BeerTemperature.prototype.setBeer = function(beer) {
    this.beer = beer;
}

BeerTemperature.prototype.equals = function(otherBeerTemperature) {
    return otherBeerTemperature.getBeer().equals(this.getBeer())
        && otherBeerTemperature.getTemperature().equals(this.getTemperature());
}

BeerTemperature.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

module.exports =  { BeerTemperature }
