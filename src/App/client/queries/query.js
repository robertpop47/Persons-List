import {gql} from "@apollo/client"

const GET_ALL_PERSONS_QUERY = gql`
    query getAllPersons{
      allPersons{
        id
        firstName
        lastName
      }
    }
    `

export default GET_ALL_PERSONS_QUERY