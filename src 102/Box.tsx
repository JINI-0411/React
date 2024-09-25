import { CSSProperties } from "react";

type BoxProps = {
  width: string;
  height: string;
  backgroundColor: "red" | "blue" | "green" | "pink";
  text: string;
};

const Box = (props: BoxProps) => {
  const cssstyle: CSSProperties = {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
  };
  return <div style={cssstyle}>{props.text}</div>;
};

export default Box;
