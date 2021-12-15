const ComentarioResolver = {
    Query: {
        buscarComentarioPorIdMenu: async(_,{unIdMenu},{dataSources}) => {
            return await dataSources.springApiRest.buscarComentarioPorIdMenu(unIdMenu);
        }
    },
    Mutation: {
        agregarComentario: async(_, { unId,unUsuario,unComentario }, { dataSources }) => {
            return await dataSources.springApiRest.agregarComentario(unId,unUsuario,unComentario);
        }
    }
};

module.exports = ComentarioResolver;