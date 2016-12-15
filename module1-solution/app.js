(function () {
'use strict';

angular.module('Module1App', [])
.controller('Module1Controller', Module1Controller);

Module1Controller.$inject = ['$scope'];
function Module1Controller ($scope) {
  $scope.eats = "";
  $scope.result = "";

  $scope.getEatFeedback = function () {
    var f = compute($scope.eats.replace(/\s+/g, ''));
    $scope.result = f;
  }

  function compute(string) {
    if (string.length > 0) {
      return string.split(',').length < 4 ? "Enjoy!" : "Too much!";
    } else {
      return "Please enter data first";
    }
  }

}

})();
