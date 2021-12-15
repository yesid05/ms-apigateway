const SillaResolver = {
    Query: {
        buscarSillaPorId: async(_, { unId }, { dataSources }) => {
            return await dataSources.djangoApiRest.buscarSillaPorId(unId)
        },
        buscarSilla: async(_, __, {dataSources}) => {
            return await dataSources.djangoApiRest.buscarSilla()
        }
    }
};

module.exports = SillaResolver;