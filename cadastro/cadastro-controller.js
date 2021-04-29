angular.module('app').controller('CadastroController', CadastroController);
CadastroController.$inject = ['$location', 'CursoService', '$routeParams'];

    function CadastroController($location, CursoService, $routeParams){
        /// DECLARAÇÃO DE VARIAVEIS
        vm = this;
        vm.teste = 'Cadastro'
        vm.cliente = {id: ""}
        vm.idCliente = undefined
        vm.textoBotao = 'Cadastrar'
        vm.botaoEstilo = 'cadastro'

        /// VERIFICAÇÃO DE EDIÇÃO OU CADASTRO
        if ($routeParams.idCliente){
            vm.idCliente = $routeParams.idCliente
            buscarId(vm.idCliente)
            vm.textoBotao = 'Editar'
            vm.botaoEstilo = 'editCadastro'
        }

        /// NAVEGAÇÃO
        vm.navegar = function(rota){
            $location.path(rota)
        }

        /// CADASTRAR
        vm.cadastrar = function(){

            /// CASO FOR PARA CADASTRAR
            if(vm.textoBotao == 'Cadastrar'){
                CursoService.exec_POST(vm.cliente).then(function(resposta){
                    if(resposta){
                        
                    }
                }) 
                vm.navegar('/');
            /// CASO FOR PARA EDITAR
            }else if(vm.textoBotao == 'Editar'){
                CursoService.exec_PUT(vm.cliente).then(function(resposta){
                    if(resposta){
                        vm.clientes = resposta
                        
                    }
                }) 
                vm.navegar('/');
            }
                  
        }

        /// FUNÇÃO BUSCAR ID DE CLIENTE PARA EDIÇÃO
        function buscarId(id){
            CursoService.exec_GET_ID(id).then(function(resposta){
                if(resposta){
                    vm.cliente = resposta
                    
                }
            })        
        }

        /// LIMPAR FORMULÁRIOS DE CADASTRO
        vm.limpar = function(){
            vm.cliente = {}
        }
    }