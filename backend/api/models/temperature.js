'use strict';

function Temperature(currentTemperature, dateTime) {
    this.currentTemperature = currentTemperature || null;
    this.dateTime = dateTime || null;
    return this;
}

Temperature.prototype.getDateTime = function() {
    return this.dateTime;
}

Temperature.prototype.setDateTime = function(dateTime) {
    this.dateTime = dateTime;
}

Temperature.prototype.getCurrentTemperature = function() {
    return this.currentTemperature;
}

Temperature.prototype.setCurrentTemperature = function(currentTemperature) {
    this.currentTemperature = currentTemperature;
}

Temperature.prototype.equals = function(otherTemperature) {
    return otherTemperature.getDateTime() == this.getDateTime()
        && otherTemperature.getCurrentTemperature() == this.getCurrentTemperature();
}

Temperature.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

module.exports =  { Temperature }
