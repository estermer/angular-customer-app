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
    // $scope.createCustomer = createCustomer;


    function deleteCustomer(customer){

    }

    function editCustomer(customer){

    }

    // function createCustomer(customer){
    //   console.log(JSON.stringify(customer));
    //   $scope.customerList.unshift(customer);
    //   updateJSON();
    // }

    function getCustomerInfo(customer){
      $scope.customerInfo = customer;
      $scope.isShow = true;
      $scope.isEdit = false;
      $scope.isList = false;
    }

    // function updateCustomer(){
    //   console.log("Updating json file");
    //   $http.put(jsonURL, JSON.stringify({
    //     customers: $scope.customerList
    //   }))
    //     .then(receiveList)
    //     .catch(catchError);
    // }

    function getCustomerList(){
      $http.get(jsonURL)
        .then(receiveList)
        .catch(catchError);
    }

    function receiveList(response){
      $scope.customerList = response.data;
      $scope.isList = true;
      $scope.isShow = false;
      $scope.isEdit = false;
      console.log(response.data);
    }

    function catchError(err) {
        console.log(err);
    }

  }
})();
