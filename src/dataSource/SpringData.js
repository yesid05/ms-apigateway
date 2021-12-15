const { RESTDataSource } = require('apollo-datasource-rest');

const ServerConfig = require('../server');

class SpringData extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = ServerConfig.SPRING_API_REST;
    }

    async buscarComentarioPorIdMenu(unIdMenu){        
        return await this.get(`/comentario/${unIdMenu}/`);
    }

    async agregarComentario(unId,unUsuario,unComentario){
        const data = new Object({idMenu:unId,usuario:unUsuario,comentario:unComentario})
        return await this.post('/comentario',data);
    }

    async buscarReplicaPorIdComentario(unIdComentario){
        return await this.get(`/replica/${unIdComentario}/`);
    }

    async agregarReplica(unIdComentario, unUsuario, unComentario){
        const data = new Object({
            idComentario:unIdComentario,
            usuario:unUsuario,
            comentario:unComentario
        })
        return await this.post('/replica',data)
    }

    /** 
    async createAccount(account) {
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post('/accounts', account);
    }

    async accountByUsername(username) {
        return await this.get(`/accounts/${username}`);
    }

    async createTransaction(transaction) {
        transaction = new Object(JSON.parse(JSON.stringify(transaction)));
        return await this.post('/transactions', transaction);
    }

    async transactionByUsername(username) {
        return await this.get(`/transactions/${username}`);
    }
    */
}

module.exports = SpringData;