(function () {
'use strict';

angular.module('Module1App', [])
.controller('Module1Controller', Module1Controller);

Module1Controller.$inject = ['$scope'];
function Module1Controller ($scope) {
  $scope.eats = "";
  $scope.result = "";

  $scope.getEatFeedback = function () {
    var f = compute($scope.eats);
    $scope.result = f;
  }

  function compute(string) {
    var arraySize = string.split(',').length;
    if (arraySize > 0) {
      return arraySize < 4 ? "Enjoy!" : "Too much!";
    } else {
      return "Please enter data first";
    }
  }

}

})();
