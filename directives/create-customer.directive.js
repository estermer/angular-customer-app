(function(){
  angular
    .module('customer-app')
    .directive('createCustomer', createCustomer)

  function createCustomer(){
    return {
      templateUrl: '/partials/new-customer.html',
      restrict: 'E'
    };
  }
})();
