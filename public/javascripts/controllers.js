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


module.controller('BlogCtrl', ['$scope', 'Blog', '$stateParams', function ($scope, Blog, $stateParams) {

    $scope.posts = Blog.query();

}]);

module.controller('BlogViewCtrl', ['$scope', 'Blog', '$stateParams', function ($scope, Blog, $stateParams) {

    $scope.blog = Blog.get({id: $stateParams.id});

}]);

module.controller('BlogPostCtrl', ['$scope', 'Blog', '$state', function ($scope, Blog, $state) {

    $scope.blog = new Blog();

    $scope.blog.date = new Date();
    $scope.blog.tag = [];

    $scope.blog.author = 'Benny Forehand';

    $scope.addTag = function(){
        $scope.blog.tag.push($scope.blog.newTag);
        $scope.blog.newTag = '';
    };


    $scope.saveBlog = function () {
        $scope.blog.$save().then(function () {
            $state.go('blog');
        });
    };



}]);

module.controller('AdminCtrl', ['$scope', 'Blog', function ($scope, Blog) {

    $scope.posts = Blog.query();

}]);

module.controller('ContactCtrl', ['$scope', 'Contact', '$state', function ($scope, Contact, $state) {

    $scope.contact = new Contact();

    //States
    $scope.contact.state = 'FL';
    $scope.contact.date = new Date();

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function (state) { return { abbrev: state }; });

    $scope.saveContact = function(){

        $scope.contact.$save().then(function () {
           $state.go('contact-thanks');
        });
    };



}]);
