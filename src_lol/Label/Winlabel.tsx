import { CSSProperties } from "react";

export type WinlabelProps = {
  winpercent: string;
};

const Winlabel = (props: WinlabelProps) => {
  const WinlabelStyle: CSSProperties = {
    fontSize: "10px",
    color: "gray",
  };
  return <span style={WinlabelStyle}>{props.winpercent} %</span>;
};

export default Winlabel;
