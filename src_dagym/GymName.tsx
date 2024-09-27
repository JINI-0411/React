import { CSSProperties } from "react";

export type GymNameProps = {
  gymName: string;
};

const GymName = (props: GymNameProps) => {
  const gymNameStyle: CSSProperties = {
    fontWeight: "bord",
    lineHeight: "26px",
    // "&:hover": {},
  };
  return <span style={gymNameStyle}>{props.gymName}</span>;
};

export default GymName;
