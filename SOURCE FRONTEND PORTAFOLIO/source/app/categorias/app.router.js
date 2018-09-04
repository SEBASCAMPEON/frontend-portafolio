(function(){
	'use strict';

	angular.module('app.categorias.router', [
		

		]).config(configure);
	configure.$inject = ['$stateProvider', '$urlRouterProvider']

	function configure($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('categorias', {
				url: '/categorias',
				views: {
					'categoriaslist':{
						template: '<categoriaslist/>'
					},
					'encabezado': {
						template: '<encabezado/>'
					},
					'piepagina':{
						template: '<piepagina/>'
					}
				}



			}).state('categoriascreate', {
				url: '/categorias/create',
				views: {
					'categoriascreate':{
						template: '<categoriascreate/>'
					},
					'encabezado': {
						template: '<encabezado/>'
					},
					'piepagina':{
						template: '<piepagina/>'
					}
				}



			});


	};

})();
