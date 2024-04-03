import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from './resolvers.js';
import { typedefs } from './typedefs.js';

const server = new ApolloServer({
    typeDefs:typedefs,
    resolvers,
  });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);