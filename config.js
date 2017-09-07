/*global angular, console*/
(function () {
    'use strict';

    function NickelCityConfig($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel|mailto):/);
        /* routes go here */
    }

    angular.module('NC').config(NickelCityConfig);

    NickelCityConfig.$inject = [
        '$compileProvider'
    ];
}());