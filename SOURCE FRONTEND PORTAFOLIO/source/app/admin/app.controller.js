(function () {
    'use strict';

    angular.module('app.admin.controller', [
 
    ]).controller('adminCtrl', adminCtrl);
    
    function adminCtrl(){
        this.usuarios = [
            {nombre: 'Maria Angel'},
            {nombre: 'Sergio'},
            {nombre: 'Valentina'},
            {nombre: 'Sara'}
        ]
    }
     

})();
