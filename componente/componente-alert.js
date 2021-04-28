angular.module('app').component('alertUser', {
    templateUrl: 'componente/alert.html', 
    bindings: {
        msg: '=',
        tipo: '='
    },
    controllerAs: 'vm',
    controller: function(){
        vm = this;
        vm.tipoClasse = undefined

        vm.$onInit = function(){
            console.log(vm.tipo)
            
            if(vm.tipo == 'sucess'){
                vm.tipoClasse = 'alert alert-success'
            }else if(vm.tipo == 'error'){
                vm.tipoClasse = 'alert alert-danger'
            }
    
        }


        


        vm.alert = [
            {type: 'Error', class: 'alert alert-danger'},
            {type: 'Sucess', class: 'alert alert-success'}
        ]

        }
    
})