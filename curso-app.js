angular.module('app', ['ngRoute']);

angular.module('app').controller('MenuController', MenuController);
MenuController.$inject = ['$location'];

    function MenuController($location){
        vm = this;
        vm.itensMenu = [
            {titulo: 'Home', class: 'nav-link active'},
            {titulo: 'Cadastro', class: 'nav-link'}
        ]

        vm.navegar = function(rota, array){
            angular.forEach(array, function(item){
                if (item.titulo == rota){
                    item.class = 'nav-link active'
                }else{
                    item.class = 'nav-link'
                }
            })
            $location.path(rota)
        }
    }