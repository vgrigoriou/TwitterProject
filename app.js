/*global angular, console, viewportUnitsBuggyfill, document*/
(function () {
    'use strict';

    var app = angular.module('NC', [
        'NC.twitterHashTagSearch'
        /* modules go here */
    ]);
    
    function NickelCityRun($location) {
        /* on route change stuff goes here */
    }
    
    app.run(NickelCityRun);
    
    angular.element(document).ready(function AngularElement_DocumentReady() {
        angular.bootstrap(document, ['NC']);
    });
    
    app.$inject = [
        '$location'
    ];
}());