const RutaResolver = {
    Query: {
        buscarRutaPorId: async(_,{unId},{dataSources}) => {
            return await dataSources.djangoApiRest.buscarRutaPorId(unId)
        },
        buscarRuta: async(_,__,{dataSources}) => {
            return await dataSources.djangoApiRest.buscarRuta()
        },
        buscarRutaPorNombre: async(_, { unNombre }, { dataSources }) => {
            /**
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.accountAPI.accountByUsername(username)
            else
                return null
                */
            return await dataSources.djangoApiRest.buscarRutaPorNombre(unNombre)
        },
        cuentaSalir: async(_,{unToken},{dataSources}) => {
            return await dataSources.djangoApiRest.cuentaSalir(unToken)
        }
    },
    Mutation: {
        cuentaAcceso: async(_,{unUsuario,unaContrasena},{dataSources}) => {
            return await dataSources.djangoApiRest.cuentaAcceso(unUsuario,unaContrasena)
        },
        cuentaCrear: async(_,{unNombre,unApellido,unNombreDeUsuario,unCorreo,unaContrasena},{dataSources}) => {
            return await dataSources.djangoApiRest.cuentaCrear(unNombre,unApellido,unNombreDeUsuario,unCorreo,unaContrasena)
        }
    }
};

module.exports = RutaResolver;