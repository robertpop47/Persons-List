import React from "react";
import {useQuery} from "@apollo/client"

import GET_ALL_PERSONS_QUERY from "../../client/queries"
import List from "../List"


const Client=()=>{
    const { loading, error, data } = useQuery(GET_ALL_PERSONS_QUERY);
    
    console.log({data, error})

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
return null
    return(<List allPersons={data.allPersons}/>)
}

export default Client