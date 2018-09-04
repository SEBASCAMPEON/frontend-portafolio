(function () {
    'use strict';

    angular.module('app.config', [
    ]).constant('BASEURL', 'http://localhost:8080/senacbi-portafolio-backend-ae81a0cbf435/webresources')

    //En este módulo se pueden declarar y asignar todas las constantes
    //que se usarán en la aplicación.
    .config(configure);

    configure.$inject = ['$authProvider', 'BASEURL'];
    function configure($authProvider, BASEURL) {
    	$authProvider.loginUrl = BASEURL + '/auth/login';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'portafolio';
    }

})();
