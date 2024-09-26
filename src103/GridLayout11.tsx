import { CSSProperties, ReactNode } from "react";

type gridLayoutProps = {
  columnNumber: number;
  component: ReactNode;
};

const GridLayout11 = (props: gridLayoutProps) => {
  const gridLayoutstyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columnNumber},1fr)`, //"repeat(6,3fr)"
    gap: "30px",
  };

  return <section style={gridLayoutstyle}>{props.component}</section>;
};
export default GridLayout11;
