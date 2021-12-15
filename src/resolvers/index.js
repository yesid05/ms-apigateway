const RutaResolver = require('./RutaResolver');
const ComentarioResolver = require('./ComentarioResolver')
const ReplicaResolver = require('./ReplicaResolver')
const AgendarSillaResolver = require('./AgendarSillaResolver')
const SillaResolver = require('./SillaResolver')

const lodash = require('lodash');

const Resolvers = lodash.merge(RutaResolver,ComentarioResolver,ReplicaResolver,SillaResolver,AgendarSillaResolver);

module.exports = Resolvers;