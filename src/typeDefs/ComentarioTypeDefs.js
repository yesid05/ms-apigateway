const { gql } = require('apollo-server');


const ComentarioTypeDefs = gql `
    type Comentario {
        id: String
        idMenu: Int
        usuario: String
        comentario: String
    }

    type Query{
        buscarComentarioPorIdMenu(unIdMenu: Int!): [Comentario]
    }
    
    type Mutation {
        agregarComentario(unId: Int!, unUsuario: String!, unComentario: String!): Comentario
    }
`;

module.exports = ComentarioTypeDefs;