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

    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: './images/black-leather-texture-hd-free-wallpaper_1242103205.jpg',
            text: 'Slide 1'
        },
        {
            image: './images/black-leather-texture-hd-free-wallpaper_1242103205.jpg',
            text: 'Slide 2'
        },
        {
            image: './images/black-leather-texture-hd-free-wallpaper_1242103205.jpg',
            text: 'Slide 3'
        }
    ];


}]);

module.controller('BlogPostCtrl', ['$scope', function ($scope) {

    $scope.posts = [
        {
            image: '',
            text: 'Blog stuff from database, or Ghost blog api'
        },
        {
            image: '',
            text: 'Blog stuff from database, or Ghost blog api 2'
        },
        {
            image: '',
            text: 'Blog stuff from database, or Ghost blog api 3'
        }
    ]

}]);
