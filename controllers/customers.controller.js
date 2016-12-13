(function(){
  angular
    .module('customer-app')
    .controller('CustomerController', CustomerController);

  CustomerController.$inject = ['$http', '$scope'];

  function CustomerController($http, $scope) {

    var jsonURL = 'http://localhost:3000/customers';

    getCustomerList();

    $scope.getCustomerInfo = getCustomerInfo;
    $scope.getCustomerList = getCustomerList;
    $scope.deleteCustomer = deleteCustomer;
    $scope.editCustomer = editCustomer;
    $scope.createCustomer = createCustomer;


    function deleteCustomer(customer){

    }

    function editCustomer(customer){

    }

    function createCustomer(customer){
      $http.post(jsonURL, customer)
        .then(receiveCustomer)
        .catch(catchError);
    }

    function getCustomerInfo(customer){
      $scope.customerInfo = customer;
      $scope.isShow = true;
      $scope.isEdit = false;
      $scope.isList = false;
    }

    function getCustomerList(){
      $http.get(jsonURL)
        .then(receiveList)
        .catch(catchError);
    }

    function receiveCustomer(response){
      console.log("Added New Customer >>>>>", response.data);
      $scope.isList = true;
      $scope.isShow = false;
      $scope.isEdit = false;
      $scope.customerList.push(response.data);
    }

    function receiveList(response){
      $scope.customerList = response.data;
      $scope.isList = true;
      $scope.isShow = false;
      $scope.isEdit = false;
      console.log("Customer List >>>>>", response.data);
    }

    function catchError(err) {
        console.log(err);
    }

  }
})();
