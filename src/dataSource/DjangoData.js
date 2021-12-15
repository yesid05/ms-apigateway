const { RESTDataSource } = require('apollo-datasource-rest');

const ServerConfig = require('../server');

class DjangoData extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = ServerConfig.DJANGO_API_REST;
        this.RUTA_API = "/api-rest"
    }

    willSendRequest(request) {        
        request.headers.set('Authorization', this.context.token)
        console.log(this.context)
    }

    async cuentaAcceso(unUsuario,unaContrasena){
        const data = new Object({usuario:unUsuario,contrasena:unaContrasena});
        console.log(data)
        return await this.post(`/acceso/`,data);
    }

    async cuentaCrear(unNombre,unApellido,unNombreDeUsuario,unCorreo,unaContrasena){
        const data = Object({
            nombre:unNombre,
            apellido:unApellido,
            nombreDeUsuario:unNombreDeUsuario,
            correo:unCorreo,
            contrasena:unaContrasena
        })
        return await this.put(`/acceso/`,data)
    }

    async cuentaSalir(unToken){
        const data = new Object({token:unToken})
        return await this.delete('/acceso/',data)
    }

    async buscarRutaPorId(unId){
        return await this.get(`${this.RUTA_API}/ruta/${unId}/`);
    }

    async buscarRuta(){
        return await this.get(this.RUTA_API+'/ruta/');
    }

    async buscarRutaPorNombre(unNombre){
        const data = new Object({q:unNombre})
        return await this.post(this.RUTA_API+'/ruta/buscar/',data);
    }

    async buscarSillaPorId(unId){
        return await this.get(`${this.RUTA_API}/silla/${unId}/`)
    }

    async buscarSilla(){
        return await this.get(this.RUTA_API+'/silla')
    }

    async agendarSilla(unUsuario,unaSilla,unaRuta,unaFecha){
        const data = new Object({
            usuario:unUsuario,
            silla:unaSilla,
            ruta:unaRuta,
            fecha:unaFecha
        })
        return await this.post(this.RUTA_API+'/agendar-silla/',data)
    }

    async agendarSilla(unUsuario,unaSilla,unaRuta,unaFecha){
        const data = new Object({
            usuario:unUsuario,
            silla:unaSilla,
            ruta:unaRuta,
            fecha:unaFecha
        })
        return await this.post(this.RUTA_API+'/agendar-silla/',data)
    }

    async buscarAgendarSillaPorUsuario(unUsuario){
        const data = new Object({usuario:unUsuario})
        return await this.get(this.RUTA_API+'/agendar-silla/',data)
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

module.exports = DjangoData;