import { CSSProperties } from "react";
import Button from "./Button";

const GridButton = () => {
  const Gridstyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(6,3fr)", //"repeat(6,3fr)"
    gap: "30px",
  };

  return (
    <section style={Gridstyle}>
      <Button backgroundColor="Deactive" borderRadius="Circle" />
      <Button backgroundColor="Deactive" borderRadius="Hard" />
      <Button backgroundColor="Deactive" borderRadius="Smooth" />
      <Button backgroundColor="Hover" borderRadius="Circle" />
      <Button backgroundColor="Hover" borderRadius="Hard" />
      <Button backgroundColor="Hover" borderRadius="Smooth" />
      <Button backgroundColor="Primary" borderRadius="Circle" />
      <Button backgroundColor="Primary" borderRadius="Hard" />
      <Button backgroundColor="Primary" borderRadius="Smooth" />
    </section>
  );
};

export default GridButton;
