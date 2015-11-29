(function() {
  'use strict';

  angular
    .module('client')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('productos', {
        url: '/productos',
        templateUrl: 'app/productos/ver.html',
        controller: 'ProductoController',
        controllerAs: 'producto'
      })
      .state('platos', {
        url: '/platos',
        templateUrl: 'app/platos/ver.html',
        controller: 'PlatoController',
        controllerAs: 'plato'
      })
      .state('altaPlatos', {
        url: '/platos/agregar',
        templateUrl: 'app/platos/alta.html',
        controller: 'PlatoController',
        controllerAs: 'plato'
      })
      .state('comidas', {
        url: '/comidas',
        templateUrl: 'app/comidas/ver.html',
        controller: 'ComidaController',
        controllerAs: 'comida'
      })
      .state('altaComidas', {
        url: '/comidas/agregar',
        templateUrl: 'app/comidas/alta.html',
        controller: 'ComidaController',
        controllerAs: 'comida'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
