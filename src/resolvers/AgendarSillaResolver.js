const AgendarSillaResolver = {
    Query: {
        buscarAgendarSillaPorUsuario: async(_, { unUsuario }, { dataSources }) => {
            return await dataSources.djangoApiRest.buscarAgendarSillaPorUsuario(unUsuario);
        }
    },
    Mutation: {
        agendarSilla: async(_, { unUsuario,unaSilla,unaRuta,unaFecha}, { dataSources }) => {
            return await dataSources.djangoApiRest.agendarSilla(unUsuario,unaSilla,unaRuta,unaFecha);
        }
    }
};

module.exports = AgendarSillaResolver;