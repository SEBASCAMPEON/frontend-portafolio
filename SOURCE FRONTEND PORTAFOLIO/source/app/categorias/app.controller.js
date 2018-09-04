(function(){
	'use strict';

	angular.module('app.categorias.controller', [


	]).controller('categoriasCreateCtrl', categoriasCreateCtrl)
	//para que pueda reconocer el controller
	.controller('categoriasListCtrl', categoriasListCtrl);

		categoriasCreateCtrl.$inject = ['Categorias'];
	function categoriasCreateCtrl(Categorias){
		this.create = function(){
			Categorias.save(this.categoria);
		}

	}

  categoriasListCtrl.$inject = ['Categorias']

	function categoriasListCtrl(Categorias){

		this.categoriasList = Categorias.query();

	}

})();
