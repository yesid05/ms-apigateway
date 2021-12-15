const ReplicaResolver = {
    Query: {
        buscarReplicaPorIdComentario: async(_,{unIdComentario},{dataSources}) => {
            return await dataSources.springApiRest.buscarReplicaPorIdComentario(unIdComentario);
        }
    },
    Mutation: {
        agregarReplica: async(_, { unIdComentario, unUsuario,unComentario }, { dataSources }) => {
            return await dataSources.springApiRest.agregarReplica(unIdComentario, unUsuario,unComentario);
        }
    }
};

module.exports = ReplicaResolver;