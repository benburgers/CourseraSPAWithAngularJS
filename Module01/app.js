(function () {
    "use strict";

    angular
        .module("myFirstApp", [])
        .controller("MyFirstController", function ($scope) {
            $scope.name = "Ben"
            $scope.sayHello = function () {
                return "Hello Coursera";
            }
        });
})();