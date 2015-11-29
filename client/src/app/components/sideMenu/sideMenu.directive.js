(function() {
  'use strict';

  angular
    .module('client')
    .directive('sideMenu', sideMenu);

  /** @ngInject */
  function sideMenu() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sideMenu/sideMenu.html'
    };

    return directive;

    /** @ngInject */
  }

})();
