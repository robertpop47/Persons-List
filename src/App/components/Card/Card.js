import React from "react";

const Card=({person, index})=>{

    return (
      <div>
        {index}-{person.id}. {person.firstName} {person.lastName}
      </div>
    );
    
  }
  
  export default Card;