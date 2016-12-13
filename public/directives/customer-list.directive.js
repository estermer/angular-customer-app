(function(){
  angular
    .module('customer-app')
    .directive('customerList', customerList);

    function customerList(){
      return {
        templateUrl: '/partials/customer-list.html',
        restrict: 'E'
      };
    }
})();
