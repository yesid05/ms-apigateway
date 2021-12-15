const { gql } = require('apollo-server');


const AgendarSillaTypeDefs = gql `
    
    type AgendarSilla{
        id: Int
        fecha: String
        usuario: Int
        silla: Int
        ruta: Int
    }

    type Msg{
        msg: String
    }

    type Query{
        buscarAgendarSillaPorUsuario(unUsuario: String!): [AgendarSilla]
    }

    type Mutation{
        agendarSilla(unUsuario: String!,unaSilla: Int!,unaRuta: Int!,unaFecha: Int!): Msg
    }
`;

module.exports = AgendarSillaTypeDefs;