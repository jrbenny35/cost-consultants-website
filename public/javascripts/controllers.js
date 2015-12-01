/**
* Created by jrbenny35 on 11/18/15.
*/
'use strict';

var module = angular.module('controllers',[
]);

module.controller('LeftNavCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

    $scope.toggleSidenav = function () {
        $mdSidenav('left').toggle();
    };


    $scope.close = function () {
        $mdSidenav('left').close();
    }

}]);

module.controller('RightNavCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

    $scope.toggleSidenav = function () {
        $mdSidenav('right').toggle();
    }

}]);

module.controller('CarouselCtrl', ['$scope' , function ($scope) {

    $scope.myInterval = 5000;
    $scope.slides = [
        {
            image: './images/warehouse-edit.jpg',
            text: 'Cost Consultants!'
        },
        {
            image: './images/warehouse-2-edit.jpg',
            text: 'Slide 2'
        },
        {
            image: './images/warehouse-management-system-wms-edit.jpg',
            text: 'Slide 3'
        }
    ];


}]);

module.controller('BlogPostCtrl', ['$scope', function ($scope) {

    $scope.posts = [
        {
            image: '',
            text: 'Blog stuff from database, or Ghost blog api'
        }
    ]

}]);

module.controller('ContactCtrl', ['$scope', 'Contact', function ($scope, Contact) {

    $scope.contact = new Contact();


    $scope.saveContact = function(){

        $scope.contact.$save().then(function () {
           $state.go('contact-thanks');
        });
    };

}]);
