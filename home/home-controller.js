angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location', 'CursoService'];

    function HomeController($location, CursoService){
        /// DECLARAÇÃO DE VARIAVEIS
        vm = this;
        vm.nClientes = 'Home'
        vm.clientes = ''
        vm.erro = false

        /// FUNÇÃO DE INICIALIZAÇÃO
        vm.init = function(){
            vm.listarClientes()
        }

        /// NAVEGAÇÃO
        vm.navegar = function(rota, id){
            $location.path(rota + '/' + id)
        }
        /// LISTAR CLIENTES
        vm.listarClientes = function(){
            CursoService.exec_GET().then(function(resposta){
                if (resposta){
                    vm.clientes = resposta;

                    /// CONTAGEM DO NÚMERO DE CLIENTES PARA EXIBIR NA LABEL
                    if (resposta.length > '1'){
                        vm.nClientes = vm.clientes.length + " clientes encontrados!";
                    }else if(resposta.length == '1'){
                        vm.nClientes = vm.clientes.length + " cliente encontrado!";
                    }else{
                        vm.nClientes = "Nenhum cliente foi encontrado!";
                    }

                /// ERRO NA LISTAGEM DE CLIENTES
                }else{
                    vm.erro = true
                    
                }
            })
        }
        /// EXCLUIR CLIENTE
        vm.excluir = function(id){
            CursoService.exec_DEL(id).then(function(resposta){
                if(resposta){
                    
                }
            })
       }

       /// EDITAR CLIENTE
       vm.editar = function(id){
            vm.navegar('Cadastro', id)
       }
    }