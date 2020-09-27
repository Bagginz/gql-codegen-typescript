import gql from 'graphql-tag';

export const typeDefs = gql`
  type Test {
    id: Int!
    name: String!
    message: String!
    bCheck: Boolean!
  }
  type Query {
    hello: String
  }
`;