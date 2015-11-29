(function () {
  'use strict';

  angular
    .module('client')
    .controller('ProductoController', ProductoController);

  ProductoController.$inject = ['Producto', 'toastr'];

  ///** @ngInject */
  function ProductoController(Producto, toastr) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.agregar = agregar;
    vm.mostrarInformacion = mostrarInformacion;
    vm.agregarProducto = agregarProducto;
    vm.eliminar = eliminar;

    activate();

    ////////////////

    function activate() {
      vm.displayed = [];
      vm.producto = {
        nombre: '',
        cantidadEnvasado: '',
        precio: '',
        proveedor: ''
      };
      vm.productos = Producto.find({});
    }

    function agregar(item){
      var productoAAgregar = item || vm.producto;
      Producto.upsert(productoAAgregar, function(producto){
          mostrarInformacion('success', 'Se agrego un producto');
        },
        function(error){
          mostrarInformacion('error', 'Error: ' + error);
        });
    }

    function eliminar(item, index){
      Producto.deleteById({id: item.id})
        .$promise
        .then(function() { 
          mostrarInformacion('success', 'Se elimino un producto');
          vm.productos.splice(index, 1);
        });
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

    function agregarProducto() {
      vm.insertado = {
        nombre: '',
        cantidadEnvasado: '',
        precio: '',
        proveedor: ''
      };
      vm.productos.push(vm.insertado);
    }

  }
})();
