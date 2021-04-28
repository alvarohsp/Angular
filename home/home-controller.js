angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location', 'CursoService'];

    function HomeController($location, CursoService){
        vm = this;
        vm.teste = 'Home'
        vm.clientes = ''
        vm.erro = false

        vm.init = function(){
            vm.listarClientes()
        }

        vm.navegar = function(rota, id){
            $location.path(rota + '/' + id)
        }

        vm.listarClientes = function(){
            CursoService.exec_GET().then(function(resposta){
                if (resposta != ''){
                    vm.clientes = resposta;
                    console.log(resposta);
                    //document.getElementById("h1T").innerHTML = vm.clientes.length + " clientes encontrados!"
                    vm.teste = vm.clientes.length + " clientes encontrados!";
                }else{
                    vm.teste = "Nenhum cliente foi encontrado";
                }
            })
        }
        vm.excluir = function(id){
            CursoService.exec_DEL(id).then(function(resposta){
                if(resposta){
                    
                }
            })
       }

       vm.editar = function(id){
            vm.navegar('Cadastro', id)

       }
    }