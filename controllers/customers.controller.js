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
      $http.delete(`${jsonURL}/${customer._id}`)
        .then(receiveResponse)
        .catch(catchError);
    }

    function editCustomer(customer){
      $http.put(`${jsonURL}/${customer._id}`, customer)
        .then(receiveResponse)
        .catch(catchError);
    }

    function createCustomer(customer){
      $http.post(jsonURL, customer)
        .then(receiveResponse)
        .catch(catchError);
    }

    function getCustomerList(){
      $http.get(jsonURL)
        .then(receiveList)
        .catch(catchError);
    }

    function getCustomerInfo(customer){
      $scope.customerInfo = customer;
      $scope.isShow = true;
      $scope.isEdit = false;
      $scope.isList = false;
    }

    function receiveResponse(response){
      console.log("Response From Server >>>>>", response.data);
      $scope.isList = true;
      $scope.isShow = false;
      $scope.isEdit = false;
      getCustomerList();
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
