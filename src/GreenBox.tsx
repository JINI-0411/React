import { CSSProperties } from "react";
const GreenBox = () => {
  const BoxStyle: CSSProperties = {
    backgroundColor: "green",
    height: "100px",
    width: "100px",
  };
  return <div style={BoxStyle}></div>;
};

export default GreenBox;
