import React, { Component, useEffect, useState } from "react";

// class Hooks extends Component {
//   state = {
//     count: 0,
//   };
//   render() {
//     return (
//       <>
//         <p> Nilai saya saat ini adalah : 0</p>
//         <button>update nilai</button>
//       </>
//     );
//   }
// }

const Hooks = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Title change${count}`;
    //memberihkan
    return () => {
      document.title = `balikawal`;
    };
  }, count);
  return (
    <>
      <p> Nilai saya saat ini adalah : {count}</p>
      <button onClick={() => setCount(count + 1)}>update nilai</button>
    </>
  );
};
export default Hooks;
