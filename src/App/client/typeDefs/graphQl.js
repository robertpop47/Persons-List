// import { gql } from '@apollo/client';

const typeDefs = `
    type Person{
        id: ID!
        firstName: String
        lastName: String
    }

    type Query{
        allPersons: [Person!]!
    }
`


export default typeDefs