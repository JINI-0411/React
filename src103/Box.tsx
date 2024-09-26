// import { CSSProperties } from "react";

// type BoxBackground = { color: "pink" | "orange" | "skyblue" | "red" };
// const Size = { small: "50*50", medium: "100*100", large: "200*200" };
// type BoxSize=Size
// type Boxx = BoxBackground & BoxSize

// const Box = (props : Boxx ) => {
//   const Boxstyle: CSSProperties = {
//     color:props.color
//     size:props.{...BoxSize}
//   };

//   return <div style={Boxstyle}></div>;
// };

// export default Box;

import { CSSProperties } from "react";

type BoxProps = {
  backgroundColor: "pink" | "orange" | "skyblue" | "red";
  size: "small" | "medium" | "large";
};

const Box = (props: BoxProps) => {
  const sizeMap = { small: "50px", medium: "100px", large: "200px" };

  const boxStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    width: sizeMap[props.size],
    height: sizeMap[props.size],
  };
  return <div style={boxStyle}></div>;
};

export default Box;
