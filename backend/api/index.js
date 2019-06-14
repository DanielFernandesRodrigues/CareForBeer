'use strict';

const home = require('./controller/home');
const temperatureController = require('./controller/temperature-controller');

function routes (url) {
    let routesResult = 'hello there';
    switch (url) {
        case '/home': routesResult = JSON.stringify(home.index()); break;
        case '/temperature': routesResult = JSON.stringify(temperatureController.index()); break;
    }
    return JSON.stringify(routesResult);
};

module.exports =  {
    routes: routes
};
