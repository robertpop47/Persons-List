import React from "react";
import {ApolloProvider} from "@apollo/client"

import client from "./client";
import Client from "./components/Client"

// import getLineFromFile from "../utils/util"

const App=()=>{
  
  // console.log(getLineFromFile("../db/persons.json",0))

  return (
    <ApolloProvider client={client}>
      
        <h2>My first Apollo app 🚀</h2>
        <Client/>
      
    </ApolloProvider>
  )
}

export default App