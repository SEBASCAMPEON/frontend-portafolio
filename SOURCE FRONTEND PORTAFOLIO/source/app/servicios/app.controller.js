(function(){
  'use strict';
  angular.module('app.servicios.controller', [

  ]).controller('ListServiciosCtrl', ListServiciosCtrl);

  ListServiciosCtrl.$inject= ['servicios'];//inyectar el parametro de la funcion
  function ListServiciosCtrl(servicios){//aqui le apsamos como parametro el servicio creado
    var vm = this;
    vm.ServiciosList=servicios.query();//aqui definimos que la variable que a a recorrer es serviciosList este lo llamamosen inicio.html para llamar la funcion ListServiciosCtrl
  }
})();
