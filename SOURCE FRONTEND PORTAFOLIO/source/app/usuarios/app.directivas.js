(function(){
	'use strict';

	angular.module('app.usuarios.directivas', [


	]).directive('usuarioscreate', usuariosCreate)
	.directive('usuarioslist', usuariosList);

	function usuariosList(){
		return {
			scope: {},
			templateUrl: 'app/usuarios/list.html',
			controller: 'usuariosListCtrl',
      controllerAs: 'vmc'

		}
	}
		function usuariosCreate(){
			return{
				scope: {},
				templateUrl: 'app/usuarios/create.html',
				controller: 'usuariosCreateCtrl',
				controllerAs: 'vms'
			}

	}


})();
