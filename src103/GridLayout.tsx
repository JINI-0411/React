import { CSSProperties } from "react";
import Button111 from "./Button111";

type GridLayoutProps = {
  repeatNumber: number;
};

const GridLayout = (props: GridLayoutProps) => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.repeatNumber},1fr)`,
    gap: "30px",
  };

  // [primary] -> Button background=priary map

  const arr = ["Primary", "Deactive", "Hover"];
  const arr1 = ["Hard", "Circle", "Smooth"];

  return (
    <section style={gridStyle}>
      {/* <Button111 backgroundColor="Primary" borderRadius="Hard"></Button111> */}
      {/* {arr.map((v)=> <Button111 backgroundColor={v}/>)} */}
    </section>

    // { Array(10).fill("pink").map((v)=>
    //     return <Circle backgroundColor="v") }
  );
};

export default GridLayout;
