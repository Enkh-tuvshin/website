import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

export * from "./index"
export * from "./HomePage"
export * from "./PostPage"

// export const BlogPage = () => {
//     const [index, setIndex] = useState(0);

//     const goRight = () => setIndex((prev) => prev + 1)
//     const goLeft = () => setIndex((prev) => prev - 1);

//     return (
//         <div className={styles.section}>
//             <div style={{
//                 transform: `translateX(${-10 * index}%)`,
//                 transition: "300ms",
//             }}
//                 className={styles.container}
//             >
//                 {new Array(10).fill(0).map((_, index) => (
//                     <Item index />
//                 ))}
//             </div>
//         </div>
//     );
// }