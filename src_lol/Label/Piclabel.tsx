import { CSSProperties } from "react";

export type PiclabelProps = {
  picpercent: string;
};

const Piclabel = (props: PiclabelProps) => {
  const PiclabelStyle: CSSProperties = {
    fontSize: "10px",
    color: "gray",
  };
  return <span style={PiclabelStyle}>{props.picpercent} %</span>;
};

export default Piclabel;
