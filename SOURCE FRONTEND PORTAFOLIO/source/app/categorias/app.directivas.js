(function(){
	'use strict';

	angular.module('app.categorias.directivas', [


	]).directive('categoriascreate', categoriasCreate)
	.directive('categoriaslist', categoriasList);

	function categoriasCreate(){
		return {
			scope: {},
			templateUrl: 'app/categorias/create.html',
			controller: 'categoriasCreateCtrl',
    	controllerAs: 'vmc'

		}
	}

	function categoriasList(){
		return {
			scope: {},
			templateUrl: 'app/categorias/list.html',
			controller: 'categoriasListCtrl',
			controllerAs: 'vms'

		}
	}


})();
