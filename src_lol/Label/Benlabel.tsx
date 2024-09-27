import { CSSProperties } from "react";

export type BenlabelProps = {
  benpercent: string;
};

const Benlabel = (props: BenlabelProps) => {
  const BenlabelStyle: CSSProperties = {
    fontSize: "10px",
    color: "gray",
  };
  return <span style={BenlabelStyle}>{props.benpercent} %</span>;
};

export default Benlabel;
