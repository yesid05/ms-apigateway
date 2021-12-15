const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const DjangoApiRest = require('./dataSource/DjangoData');
const SpringApiRest = require('./dataSource/SpringData');
//const AuthAPI = require('./dataSources/auth_api');
//const authentication = require('./utils/authentication');

const server = new ApolloServer({
    //context: authentication,
    context: ({req}) => {
        const token = req.headers.authorization || '';
        //console.log("Token "+token)
        return {
            token:token
        }
    },
    typeDefs,
    resolvers,
    dataSources: () => ({
        djangoApiRest: new DjangoApiRest(),
        springApiRest: new SpringApiRest()
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});