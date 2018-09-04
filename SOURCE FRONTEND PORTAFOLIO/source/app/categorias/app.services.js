(function(){
	'use strict';

	angular.module('app.categorias.services', [

	]).factory('Categorias', Categorias);

		Categorias.$inject = ['$resource', 'BASEURL'];

		function Categorias($resource, BASEURL){
			return $resource(BASEURL + '/categorias/:categoriaId');
		}








	//factory --> Es si la logica sera compleja || Se puede acceder en cualquier parte de la aplicación



	//services --> Es mejor si el codigo es mas sencillo || Se puede acceder en cualquier parte de la aplicación
	//Sse realiza para todo lo necesario para connectar con la DB o web servies



})();
