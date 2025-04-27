(function () {
    "use strict";

    angular
        .module("LunchCheck", [])
        .controller("LunchCheckController", LunchController);

    function LunchController ($scope) {
        $scope.lunch = "";
        $scope.message = "";
        $scope.messageError = false;

        $scope.checkTooMuch = function () {
            if ($scope.lunch === "") {
                $scope.message = "Please enter data first";
                $scope.messageError = true;
                return;
            }

            $scope.messageError = false;
            var items = $scope.lunch.split(",").filter((item) => item.trim() !== "");
            if (items.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };
    }
})();