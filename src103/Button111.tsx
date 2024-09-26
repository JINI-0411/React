// import { CSSProperties } from "react";

// type Buttonprops = {
//   color: "#205BF3" | "#478DF5" | "#979797";
//   borderRadius: "Hard" | "Smooth" | "Cricle";
// };

// const Button111 = (props: Buttonprops) => {
//   const radius = { Hard: " 0px", Smooth: "15px", Cricle: "50px" };

//   const Buttonstyle: CSSProperties = {
//     backgroundColor: props.color,
//     borderRadius: props.borderRadius,
//   };

//   return <button style={Buttonstyle}></button>;
// };

// export default Button111;

import { CSSProperties } from "react";

type Buttonprops = {
  borderRadius: "Hard" | "Smooth" | "Circle";
  backgroundColor: "Primary" | "Hover" | "Deactive";
};

const Button111 = (props: Buttonprops) => {
  const borderMap = {
    Hard: "0px",
    Smooth: "6px",
    Circle: "20px",
  };

  const backgroundColorMap = {
    Primary: "#205BF3",
    Hover: "#478DF5",
    Deactive: "#979797",
  };

  const buttonStyle: CSSProperties = {
    borderRadius: borderMap[props.borderRadius],
    backgroundColor: backgroundColorMap[props.backgroundColor],
    color: "white",
    padding: "10px 45px",
    fontSize: " 32px",
    border: "none",
  };

  return <button style={buttonStyle}></button>;
};

export default Button111;
