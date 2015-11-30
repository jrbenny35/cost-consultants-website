/**
 * Created by BennyJr on 11/17/15.
 */

'use strict';

var myApp = angular.module('myApp',[

    'ui.router',
    'ngAnimate',
    'controllers',
    'ngResource',
    'ngMaterial',
    'ngMessages',
    'ui.bootstrap',
    'ngMdIcons'

]);

myApp.config(function ($stateProvider, $locationProvider) {


    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'partials/home'
        })
        .state('about',{
            url: '/about',
            templateUrl: 'partials/about'
        })
        .state('contact',{
            url: '/contact',
            templateUrl: 'partials/contact',
            controller: 'ContactCtrl'
        })
        .state('info', {
            url: '/info',
            templateUrl: 'partials/contact'
        });

    $locationProvider.html5Mode(true);
});

myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('purple');

});

//Resources
//myApp.factory('Contact', function($resource) {
//  return $resource('/api/contact/:id', { id: '@_id' }); //full endpoint address
//});
