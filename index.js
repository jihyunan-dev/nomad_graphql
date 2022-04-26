import { createServer } from "@graphql-yoga/node"
import resolvers from "./graphql/resolvers"

const server = new createServer({
  schema: {
    typeDefs: `
      type Query {
        name: String!
      }
    `,
    resolvers: resolvers
  },
  
})

server.start(() => console.log('graphql server running'))