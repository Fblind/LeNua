(function () {
  'use strict';

  angular
    .module('client')
    .controller('PlatoController', PlatoController);

  PlatoController.$inject = ['Plato', 'toastr', 'Producto', 'Ingrediente', '$q'];

  ///** @ngInject */
  function PlatoController(Plato, toastr, Producto, Ingrediente, $q) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.limpiarForm = limpiarForm;
    vm.agregarNuevoIngrediente = agregarNuevoIngrediente;
    vm.cargarProductos = cargarProductos;
    vm.agregarIngrediente = agregarIngrediente;
    vm.agregar = agregar;

    activate();

    ////////////////

    function activate() {
      vm.displayed = [];
      vm.plato = {
        nombre: '',
        ingredientes: []
      };
      vm.platos = Plato.find({});
      vm.productos = Producto.find({});
    }

    function limpiarForm(){
      vm.plato.nombre = '';
      vm.plato.ingredientes = [];
      vm.platos = [];
    }

    function agregar(){
      //CreateMany
      Plato.create(vm.plato, function(plato){
        Plato.ingredientes.createMany({id: plato.id}, vm.plato.ingredientes, function(res){
          mostrarInformacion('success', 'Plato creado');
        }, function(err){
          mostrarInformacion('error', 'Ha ocurrido un error');
        });
      }, 
      function(error){
        mostrarInformacion('error', 'Ha ocurrido un error');
      });
    }

    function eliminar(item, index){
      
    }

    function agregarIngrediente(item){
      return;
    }

    function cargarProductos(){
      vm.productos = Producto.find({});
    }

    //TODO: Abstraer en un Service
    function mostrarInformacion(tipo, mensaje){
      var informar = {
        error: toastr.error,
        success: toastr.success,
        info: toastr.info
      };
      return informar[tipo](mensaje);
    }

    function agregarNuevoIngrediente() {
      vm.insertado = {
        producto: '',
        medida: '',
      };
      vm.plato.ingredientes.push(vm.insertado);
    }

  }
})();
