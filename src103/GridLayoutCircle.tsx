import { CSSProperties } from "react";
import Circle from "./Circle";

const GridLayoutCircle = () => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: "30px",
  };

  return (
    <section style={gridStyle}>
      {[
        "#55efc4",
        "#81ecec",
        "#74b9ff",
        "#a29bfe",
        "#dfe6e9",
        "#00b894",
        "#00cec9",
        "#0984e3",
        "#6c5ce7",
        "#b2bec3",
      ].map((v) => (
        <Circle backgroundColor={v} />
      ))}
    </section>
  );
};

export default GridLayoutCircle;
