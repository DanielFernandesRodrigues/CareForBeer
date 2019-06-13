'use strict';

const home = require('./controller/home');
const temperatureController = require('./controller/temperature-controller');

function routes (url) {
    switch (url) {
        case '/home': return home.index();
        case '/temperature': return JSON.stringify(temperatureController.index());
    }
    return 'hello there';
};

module.exports =  {
    routes: routes
};
