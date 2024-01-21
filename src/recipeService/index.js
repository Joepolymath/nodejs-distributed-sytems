const fastify = require('fastify');
const graphql = require('fastify-gql');
const fs = require('fs');
const path = require('path');

const server = fastify({ logger: true });

const schema = fs
  .readFileSync(path.join(__dirname, '..', 'shared/graphql-schema.gql'))
  .toString();

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3002;

const resolvers = {
  Query: {
    pid: process.pid,
    recipe: async (_obj, { id }) => {
      if (id != 42) throw new Error(`recipe ${id} not found`);
      return {
        id,
        name: 'Chicken',
        steps: 'Throw in the pot',
      };
    },
    Recipe: {
      ingredients: async (obj) => {
        return obj.id != 42
          ? []
          : [
              { id: 1, name: 'Chicken', quantity: '1 lb' },
              { id: 2, name: 'Sauce', quantity: '2 cups' },
            ];
      },
    },
  },
};

const startGraphQLServer = () => {
  server
    .register(graphql, { schema, resolvers, graphiql: true })
    .listen(PORT, HOST, () => {
      console.log(`Producer running at http://${HOST}:${PORT}/graphql`);
    });
};

module.exports = startGraphQLServer;
