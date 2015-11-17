/**
 * Created by BennyJr on 11/17/15.
 */

'use strict';

var myApp = angular.module('webApp', [
    'ui.router',
    'ngMessages',
    'ngResource',
    'ngAnimate',
    'ngResource',
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
            templateUrl: 'partials/contact'
        })
        .state('info', {
            url: '/info',
            templateUrl: 'partials/contact'
        });

    $locationProvider.html5Mode(true);
});

//Resources
//myApp.factory('Contact', function($resource) {
  //  return $resource('/api/contact/:id', { id: '@_id' }); //full endpoint address
//});
