/*global angular, console*/
(function () {
    'use strict';
    
    function TwitterHashTagSearchController($http) {
        var vm = this,
            twitterEndpoint = 'https://api.twitter.com/1.1/search/tweets.json',
            parameters = [
                '',
                'result_type=recent'
            ],
            adjustKeyword = function TwitterHashTagSearchController_adjustKeyword() {
                parameters[0] = 'q=%23' + (vm.configuration.keyword || 'superbowl');
            },
            buildTwitterApiRequest = function TwitterHashTagSearchController_buildTwitterApiRequest() {
                var requestUrl = twitterEndpoint + '?',
                    i;
                
                adjustKeyword();
                
                for (i = 0; i < parameters.length; ++i) {
                    requestUrl += (i > 0 ? '&' : '') + parameters[i];
                }
                
                return requestUrl;
            };
        
        vm.configuration = {
            keyword: '',
            waiting: false,
            results: [{
                user: {
                    name: 'Bobby Joe'
                },
                'retweet_count': 4,
                text: '#peach'
            }, {
                user: {
                    name: 'Jimmy John'
                },
                'retweet_count': 10,
                text: '#apples'
            }]
        };
        
        vm.functionFromLayout = function TwitterHashTagSearchController_functionFromLayout() {
            vm.configuration.waiting = true;
            
            $http.get(buildTwitterApiRequest()).then(function (response) {
                if (angular.isObject(response.data)) {
                    console.log(response);
                    vm.configuration.results = response.data.statuses;
                }
                
                vm.configuration.waiting = false;
            }, function (err) {
                console.log(err);
                vm.configuration.waiting = false;
            });
        };
        
        vm.stuff = 'This is the app for Nickel City';
    }
    
    angular.module('NC.twitterHashTagSearch').controller('TwitterHashTagSearchController', TwitterHashTagSearchController);
    
    TwitterHashTagSearchController.$inject = [
        '$http'
    ];
}());