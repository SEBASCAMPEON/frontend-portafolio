(function(){
	'use strict';

	angular.module('app.usuarios.services', [

		]).factory('Usuarios', Usuarios );

		Usuarios.$inject = ['$resource', 'BASEURL'];

		function Usuarios($resource, BASEURL){
			return $resource(BASEURL + '/usuarios');
		}








	//factory --> Es si la logica sera compleja || Se puede acceder en cualquier parte de la aplicación



	//services --> Es mejor si el codigo es mas sencillo || Se puede acceder en cualquier parte de la aplicación
	//Sse realiza para todo lo necesario para connectar con la DB o web servies



})();
