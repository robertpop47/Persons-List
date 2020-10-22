import { ApolloClient, InMemoryCache} from '@apollo/client';
import {SchemaLink} from '@apollo/client/link/schema'
import typeDefs from "./typeDefs"
import mocks from "./resolvers"
import { makeExecutableSchema } from '@graphql-tools/schema'
import { addMocksToSchema } from "@graphql-tools/mock"

const schema = makeExecutableSchema({typeDefs})
const mockedSchema = addMocksToSchema({
  schema,
  mocks:()=> {debugger},
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({schema: mockedSchema})
})


export default client
