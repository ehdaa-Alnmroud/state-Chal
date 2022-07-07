// import React, { useState } from "react";

// function HookCoun() {
//   const initval = 0;
//   const [count, setcount] = useState(initval);
//   const inn = () => {
//     for (let i = 0; i < 5; i++) {
//     //     setcount(count + 5);
        
//       setcount((pervCount) => pervCount + 1);
//     }
//   };

//   return (
//     <div>
//       count : {count}
//       <button onClick={inn}>up by 5</button>
//       <button onClick={() => setcount(initval)}>reset</button>
//       <button onClick={() => setcount((pervCount) => pervCount + 1)}>up</button>
//       <button
//         onClick={() => count > 0 && setcount((pervCount) => pervCount - 1)}
//       >
//         dawn
//       </button>
//     </div>
//   );
// }

// export default HookCoun;

// // import React, { useState } from 'react'

// // const HookCoun = () => {
// //     const [count , setcoun]=useState(0)
// //   return (
// //     <div>
// //       <button  onClick={() => setcoun(count +1)} >count {count}</button>
// //     </div>
// //   )
// // }

// // export default HookCoun
