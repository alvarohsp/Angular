angular.module('app').controller('CadastroController', CadastroController);
CadastroController.$inject = ['$location', 'CursoService', '$routeParams'];

    function CadastroController($location, CursoService, $routeParams){
        /// DECLARAÇÃO DE VARIAVEIS
        vm = this;
        vm.tituloCadastro = 'Cadastro'
        vm.cliente = {id: ""}
        vm.clientes = ''
        vm.idCliente = undefined
        vm.textoBotao = 'Cadastrar'
        vm.botaoEstilo = 'cadastro'

        /// VERIFICAÇÃO DE EDIÇÃO OU CADASTRO
        if ($routeParams.idCliente){
            vm.idCliente = $routeParams.idCliente
            buscarId(vm.idCliente)
            vm.textoBotao = 'Editar'
            vm.botaoEstilo = 'editCadastro'
            vm.tituloCadastro = 'Editar Cadastro'
        }

        /// FUNÇÃO DE INICIALIZAÇÃO
        vm.init = function(){
            vm.listarClientes()
        }

        /// LISTAR CLIENTES
        vm.listarClientes = function(){
            CursoService.exec_GET().then(function(resposta){
                if (resposta){
                    vm.clientes = resposta;

                /// ERRO NA LISTAGEM DE CLIENTES
                }else{
                    vm.erro = true
                    
                }
            })
        }

        /// NAVEGAÇÃO
        vm.navegar = function(rota){
            $location.path(rota)
        }

        /// CADASTRAR
        vm.cadastrar = function(){
            /// ANALISANDO SE ALGUM NOME FOI INSERIDO
            if (vm.cliente.nome != undefined && vm.cliente.cpf != undefined){

                /// CASO FOR PARA CADASTRAR
                if(vm.textoBotao == 'Cadastrar'){

                    /// ANALISANDO SE O CLIENTE JA EXISTE NO BANCO DE DADOS E SE OS DADOS SÃO VALIDOS
                    if (analisarNomeCpf(vm.cliente) == true && analisarClienteExistente(vm.cliente) == false){
                        CursoService.exec_POST(vm.cliente).then(function(resposta){
                            if(resposta){
                                
                            }
                        }) 
                        vm.navegar('/');
                    }
                                
                /// CASO FOR PARA EDITAR
                }else if(vm.textoBotao == 'Editar'){
                    if (analisarNomeCpf(vm.cliente) == true && analisarClienteExistente(vm.cliente) == false){
                        CursoService.exec_PUT(vm.cliente).then(function(resposta){
                            if(resposta){
                                vm.clientes = resposta
                                
                            }
                        }) 
                        vm.navegar('/');
                    }         
                }
                /// CASO ALGUM CAMPO ESTEJA VAZIO
            }else{
                alert("Favor preencher todos os formulários!")
            }         
        }

        /// VALIDAR NOME COM NO MINIMO 3 LETRAS E CPF COM NO MINIMO 11 CARACTERES
        function analisarNomeCpf(obj){
            if(obj.nome.length < 3){
                alert("Nome inválido!\n\nTente inserir um nome com pelo menos 3 caracteres.")
                return false
            }else{
                if(obj.cpf.length < 11){
                    alert("CPF inválido\n\nTente inserir um CPF válido de pelo menos 11 caracteres")
                    return false
                }else {
                    return true
                }
            }
        }
            
        /// VERIFICAR SE CLIENTE JA EXISTE
        function analisarClienteExistente(obj){
            for (n = 0; n < vm.clientes.length ; n++ ){

                /// SE CLIENTE JA EXISTIR
                if (obj.cpf == vm.clientes[n].cpf){
                    alert("Usuário ja se encontra cadastrado\n\nSó é permitido o cadastro de 1 cliente por CPF")
                    return true
                } 
         }
         /// CASO NÃO EXISTA
         return false 
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