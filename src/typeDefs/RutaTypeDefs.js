const { gql } = require('apollo-server');


const RutaTypeDefs = gql `
    
    type Acceso{
        usuario: String
        token: String
    }
    
    type Ruta {
        id: Int
        descripcion: String
        tiempo: String
    }
    
    type Query {        
        buscarRutaPorId(unId: Int!): Ruta
        buscarRuta: [Ruta]
        buscarRutaPorNombre(unNombre: String!): [Ruta]
        cuentaSalir(unToken: String): Acceso
    }

    type Mutation{
        cuentaAcceso(unUsuario: String!,unaContrasena: String!): Acceso
        cuentaCrear(unNombre: String!,unApellido: String!,unNombreDeUsuario: String!,unCorreo: String!,unaContrasena: String!): Acceso
    }
`;

module.exports = RutaTypeDefs;