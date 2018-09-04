(function(){
  'use strict';
  angular.module('app.servicios.services', [
    //aqui van las dependencias osea archivos que jala para funcionar en este caso va vacio
  ]).factory('servicios', servicios);//este es el que llamamos en el controller como argumetno de la funcion.

  servicios.$inject = ['$resource', 'BASEURL'];

  function servicios($resource, BASEURL){//un $resource consume todo el webservice con  $http debes repetirla por cada  una de las funciones get post put delete etc... es mejor resource
    return $resource(BASEURL + '/servicios/:id',{
      id:'@id'
    });//si quiero que me queden funcionando los 5 metodos get post etc.... entonces le paso el id /servicios/ :id/..... y asi
  }
})();
