(function(){
  angular
    .module('customer-app')
    .controller('CustomerController', CustomerController);

  CustomerController.$inject = ['$http', '$scope'];

  function CustomerController($http, $scope) {

    var jsonURL = 'https://api.myjson.com/bins/3qb95';

    getCustomerList();

    $scope.getCustomerInfo = getCustomerInfo;
    $scope.returnToList = returnToList;

    function returnToList(){
      $scope.customerInfo = null;
    }

    function getCustomerInfo(customer){
      $scope.customerInfo = customer;
      console.log("works");
    }

    function getCustomerList(){
      $http.get(jsonURL)
        .then(receiveList)
        .catch(catchError);
    }

    function receiveList(response){
      $scope.customerList = response.data.customers;
      console.log(response.data.customers);
    }

    function catchError(err) {
        console.log(err);
    }

  }
})();
