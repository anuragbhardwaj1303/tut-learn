import React from "react";
import * as data from "../../data";

export default function Banner() {
  return (
    <div>
      <h1>hello {data.person.name} from banner</h1>
    </div>
  );
}
//another way 

/*
function Banner =()=>{
    return(
        <div>
      <h1>hello {data.person.name} from banner</h1>
    </div>
    );
}
*/
