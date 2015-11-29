(function () {
  'use strict';

  angular
    .module('client')
    .controller('ComidaController', ComidaController);

  ComidaController.$inject = ['Comida', 'toastr', 'Plato', 'Comestible'];

  ///** @ngInject */
  function ComidaController(Comida, toastr, Plato, Comestible) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.limpiarForm = limpiarForm;
    vm.agregarNuevoPlato = agregarNuevoPlato;
    vm.agregarIngrediente = agregarIngrediente;
    vm.agregar = agregar;

    activate();

    ////////////////

    function activate() {
      vm.displayed = [];
      vm.comida = {
        nombre: '',
        platos: []
      };
      vm.comidas = Comida.find({});
      vm.platos = Plato.find({});
    }

    function limpiarForm(){

    }

    function agregar(){
      Comida.create(vm.comida, function(comidaCreada){
        _.each(vm.comida.platos, function(plato){
          Comestible.create({
            comidaId: comidaCreada.id,
            platoId: plato.plato.id,
            unidades: plato.unidades
          }, function(res){
            console.log(res);
          }, function(err){

          });
        });
      });
    }

    function eliminar(item, index){
      
    }

    function agregarIngrediente(item){

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

    function agregarNuevoPlato() {
      vm.insertado = {
        plato: '',
        unidades: '',
      };
      vm.comida.platos.push(vm.insertado);
    }

  }
})();
