angular.module('app', ['ngRoute']);

angular.module('app').controller('MenuController', MenuController);
MenuController.$inject = ['$location'];

    function MenuController($location){
        vm = this;
        vm.itensMenu = [
            {titulo: 'Home', class: 'navLinkA'},
            {titulo: 'Cadastro', class: 'navLink'}
        ]

        vm.about = function(){
            alert("Projeto final do curso de Angular JS (Hackathon)\nData: 28/04/2021\nProfessor: Hudson Sena" )
        }
        vm.navegar = function(rota, array){
            angular.forEach(array, function(item){
                if (item.titulo == rota){
                    item.class = 'navLinkA'
                }else{
                    item.class = 'navLink'
                }
            })
            $location.path(rota)
        }
    }