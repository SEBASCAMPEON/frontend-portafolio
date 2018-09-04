(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'ngResource',
        'angular.filter',
        'satellizer',
        //'templates',
        'app.config',
        'app.categorias',
        'app.inicio',
        'app.footer',
        'app.header',
        'app.admin',
        'app.usuarios',
        'app.login',
        'app.servicios'
    ]);

})();
