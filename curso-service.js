angular.module('app').factory("CursoService", CursoService);
CursoService.$inject = ["$http"]

    function CursoService($http){
        const REST_CLIENTE = 'http://localhost:3000/clientes';
        

        var service = {
            exec_GET: function(){
                return $http.get(REST_CLIENTE).then(tratarResposta, tratarErro);
            },

            exec_GET_ID: function(id){
                return $http.get(REST_CLIENTE + '/' + id).then(tratarResposta, tratarErro);
            },
            exec_POST: function(cliente){
                return $http.post(REST_CLIENTE, cliente).then(tratarResposta, tratarErro);
            },

            exec_PUT: function(cliente){
                return $http.put(REST_CLIENTE + '/' + cliente.id, cliente).then(tratarResposta, tratarErro);
            },
         
            exec_DEL: function(id){
                return $http.delete(REST_CLIENTE + '/' + id).then(tratarResposta, tratarErro);
            }
        }

        function tratarResposta(resposta){
            return resposta.data;
        }

        function tratarErro(erro){
            return erro.data;
        }

        return service;
    }