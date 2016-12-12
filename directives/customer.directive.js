(function(){
  angular
    .module('customer-app')
    .directive('customer', customer);

  function customer(){
    return {
      templateUrl: '/partials/customer.html',
      restrict: 'E'
    };
  }
})();
