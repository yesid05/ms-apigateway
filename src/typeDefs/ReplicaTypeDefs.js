const { gql } = require('apollo-server');


const ReplicaTypeDefs = gql `
    type Replica {
        id: String
        idComentario: String
        usuario: String
        comentario: String
    }

    type Query{
        buscarReplicaPorIdComentario(unIdComentario: String!): [Replica]
    }
    
    type Mutation {
        agregarReplica(unIdComentario: String!, unUsuario: String!, unComentario: String!): Replica
    }
`;

module.exports = ReplicaTypeDefs;