(function(){
  angular
    .module('customer-app')
    .directive('editCustomer', editCustomer);

  function editCustomer(){
    return {
      templateUrl: '/partials/edit-customer.html',
      restrict: 'E'
    }
  }
})();
