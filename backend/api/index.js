'use strict';

const home = require('./controller/home');
const temperatureController = require('./controller/temperature-controller');

function routes (url) {
    switch (url) {
        case '/message':  return 'hello there';
        case '/home': return home.index();
        case '/temperature': return JSON.stringify(temperatureController.index());
    }
    return 'not found';
};

module.exports =  {
    routes: routes
};
