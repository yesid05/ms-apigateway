const { gql } = require('apollo-server');


const SillaTypeDefs = gql `
    
    type Silla{
        id: Int
        nombre: String
    }

    type Query{
        buscarSillaPorId(unId: Int!): Silla
        buscarSilla: [Silla]
    }
`;

module.exports = SillaTypeDefs;