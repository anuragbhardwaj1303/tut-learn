import React from "react";
import reactDom from "react-dom";

//method 1

// import { name, age, person} from "./data";
// const App = () => {
//   return (
//     <section>
//       <h2>{name}</h2>
//       <h3>{age}</h3>
//       <h4>{person.name}</h4>
//       <p>{person.age}</p>
//     </section>
//   );
// };

//method 2

import * as data from "./data";
import Banner from "./components/header/Banner";
const App = () => {
  return (
    <section>
      <Banner></Banner>
      <h2>{data.name}</h2>
      <h3>{data.age}</h3>
    </section>
  );
};
export default App;
