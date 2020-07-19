(function () {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
    $scope.input = "";
    $scope.message = "";
    $scope.checkButton = function() {
    var input = $scope.input;

    if (input == 0) {
      $scope.message = "Please enter data first."
      }
    else if (input.split(",").length < 4) {
      $scope.message = "Enjoy!";
      }
    else {
      $scope.message = "Too much!"
      }
    }
  }

}
)();
