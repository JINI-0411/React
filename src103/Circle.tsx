import { CSSProperties } from "react";

type Circleprops = {
  backgroundColor: string;
  // | "#55efc4"
  // | "#81ecec"
  // | "#74b9ff"
  // | "#a29bfe"
  // | "#dfe6e9"
  // | "#00b894"
  // | "#00cec9"
  // | "#0984e3"
  // | "#6c5ce7"
  // | "#b2bec3";
};

const Circle = (props: Circleprops) => {
  const CircleStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    borderRadius: "9999px",
    border: "none",
    width: "50px",
    height: "50px",
  };
  return <div style={CircleStyle}></div>;
};

export default Circle;
