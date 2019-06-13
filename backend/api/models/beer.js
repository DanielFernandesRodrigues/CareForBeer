'use strict';

function Beer(name, minTemperature, maxTemperature) {
    this.name = name || null;
    this.minTemperature = minTemperature || null;
    this.maxTemperature = maxTemperature || null;
    return this;
}

Beer.prototype.getMaxTemperature = function() {
    return this.maxTemperature;
}

Beer.prototype.setMaxTemperature = function(maxTemperature) {
    this.maxTemperature = maxTemperature;
}

Beer.prototype.getMinTemperature = function() {
    return this.minTemperature;
}

Beer.prototype.setMinTemperature = function(minTemperature) {
    this.minTemperature = minTemperature;
}

Beer.prototype.getName = function() {
    return this.name;
}

Beer.prototype.setName = function(name) {
    this.name = name;
}

Beer.prototype.equals = function(otherBeer) {
    return otherBeer.getName() == this.getName()
        && otherBeer.getAge() == this.getAge();
}

Beer.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

module.exports =  { Beer }
