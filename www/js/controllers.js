angular.module('app.controllers', [])

.controller('mainPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.mdl = {};
}])

.controller('resultsCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

  company = $stateParams.radio1;
  //url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + company + "&apikey=MVKNCX4WDG4IHC3L";
  url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo";

    $http.get(url).then(function(response){
            $scope.symbol = response.data["Global Quote"]["01. symbol"];
            $scope.current = response.data["Global Quote"]["05. price"];
            $scope.analysis = response.data["Global Quote"]["07. latest trading day"];
            $scope.previous = response.data["Global Quote"]["08. previous close"];
            $scope.trend = $scope.current - $scope.previous;

            if($scope.trend > 0){
              $scope.color = "#000000";
              $scope.recommendation = "Keep";
            } else {
              $scope.color = "#ff0000";
              $scope.recommendation = "Sell";
            }

        }, function(error){
            //There was an error fetching from the server
            alert("Unable to retrieve information");
    });

}])
