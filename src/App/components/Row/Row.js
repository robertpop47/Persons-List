import React from "react"

import Card from "../Card"

const Row=({index,style, data})=>(
    <div style={style}>
        <Card person={data[index]} index={index} style={style}/>
    </div>
)

export default Row