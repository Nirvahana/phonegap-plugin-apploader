cordova.define("phonegap-plugin-apploader.apploader", function(require, exports, module) {
var cordova = require('cordova'),
	exec = require('cordova/exec');

var AppLoader = function() {};

AppLoader.prototype.initialize = function(callback) {
    return cordova.exec(
        callback,
        null,
        'AppLoader',
        'initialize',
        [ null ]
    );
}

AppLoader.prototype.fetch = function(url, success, failure) {
    return cordova.exec(
        success,
        failure,
        'AppLoader',
        'fetch',
        [ url ]
    );
}
               
               AppLoader.prototype.loadFromURL = function(url, success, failure) {
               return cordova.exec(
                                   success,
                                   failure,
                                   'AppLoader',
                                   'loadFromURL',
                                   [ url ]
                                   );
               }               

AppLoader.prototype.load = function(failure) {
    return cordova.exec(
        null,
        failure,
        'AppLoader',
        'load',
        [ null ]
    );
}
               
               AppLoader.prototype.Unload = function(failure) {
               return cordova.exec(
                                   null,
                                   failure,
                                   'AppLoader',
                                   'Unload',
                                   [ null ]
                                   );
               }

var appLoader = new AppLoader();

module.exports = appLoader;

});
