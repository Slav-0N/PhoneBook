import React from "react";

const Reduce = () => {
  const reduceProcessing = (fruits) => {
    return fruits.reduce((accum, value) => {
      accum[value] > 0 ? (accum[value] += 1) : (accum[value] = 1);
      return accum;
    }, {});
  };

  const result = reduceProcessing([
    "apple",
    "orange",
    "apple",
    "banana",
    "apple",
    "banana",
  ]);

  return (
    <>
      <div>Reduce</div>
      <div>{JSON.stringify(result)}</div>
    </>
  );
};
export default Reduce;
// import React, { Component } from "react";
// export default class Reduce extends Component {
//   reduceProcessing = (fruits) => {
//     return fruits.reduce((accum, value) => {
//       accum[value] > 0 ? (accum[value] += 1) : (accum[value] = 1);
//       return accum;
//     }, {});
//   };

//   render() {
//     const result = this.reduceProcessing([
//       "apple",
//       "orange",
//       "apple",
//       "banana",
//       "apple",
//       "banana",
//     ]);
//     console.log(result);
//     return <div>{JSON.stringify(result)}</div>;
//   }
// }
