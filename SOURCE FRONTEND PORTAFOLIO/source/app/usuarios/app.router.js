(function(){
	'use strict';

	angular.module('app.usuarios.router', [


		]).config(configure);
	configure.$inject = ['$stateProvider', '$urlRouterProvider']

	function configure($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('usuarios', {
				url: '/usuarios',
				views: {
					'usuarioslist':{
						template: '<usuarioslist/>'
					},
					'encabezado': {
						template: '<encabezado/>'
					},
					'piepagina':{
						template: '<piepagina/>'
					}
				}



			}).state('usuarioscreate' ,{
					url: '/usuarios/create',
					views: {
						'encabezado':{
						template: '<encabezado/>'
					},
					'piepagina':{
						template: '<piepagina/>'
					},
						'usuarioscreate':{
							template:'<usuarioscreate/>'
					}


			}
	});
};
})();
