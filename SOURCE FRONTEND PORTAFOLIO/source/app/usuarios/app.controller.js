(function(){
	'use strict';

	angular.module('app.usuarios.controller', [


	]).controller('usuariosListCtrl', usuariosListCtrl)
	.controller('usuariosCreateCtrl', usuariosCreateCtrl);


	usuariosListCtrl.$inject=['Usuarios'];
	function usuariosListCtrl(Usuarios){
	this.usuariosList = Usuarios.query();

 }

	usuariosCreateCtrl.$inject =['Usuarios'];
  function usuariosCreateCtrl(Usuarios){
  this.create = function(){
	Usuarios.save(this.usuario);
 	}
}

})();
