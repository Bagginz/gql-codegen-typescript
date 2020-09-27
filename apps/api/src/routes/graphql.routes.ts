import { ApolloServer } from 'apollo-server-express';
import {
    typeDefs
} from '@gqlcodegen/model';

export const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };


export const gqlRoute = (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });


  server.applyMiddleware({ app, path: '/graphql' });
};
