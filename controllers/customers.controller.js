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
    $scope.deleteCustomer = deleteCustomer;
    $scope.editCustomer = editCustomer;
    $scope.createCustomer = createCustomer;


    function deleteCustomer(customer){

    }

    function editCustomer(customer){

    }

    function createCustomer(customer){

    }

    function returnToList(){
      $scope.isShow = false;
      $scope.isEdit = false;
      getCustomerList();
    }

    function getCustomerInfo(customer){
      $scope.customerInfo = customer;
      $scope.isShow = true;
      $scope.isEdit = false;
      $scope.isList = false;
    }

    function updateJSON(){
      $http.put(jsonURL, {
        customers: $scope.customers
      })
        .then(receiveList)
        .catch(catchError);
    }

    function getCustomerList(){
      $http.get(jsonURL)
        .then(receiveList)
        .catch(catchError);
    }

    function receiveList(response){
      $scope.customerList = response.data.customers;
      $scope.isList = true;
      console.log(response.data.customers);
    }

    function catchError(err) {
        console.log(err);
    }

  }
})();
