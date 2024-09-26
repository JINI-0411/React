import { CSSProperties } from "react";

type Buttonprops = {
  borderRadius: "Hard" | "Smooth" | "Circle";
  backgroundColor: "Primary" | "Hover" | "Deactive";
};

const Button = (props: Buttonprops) => {
  const borderRR = { Hard: "0px", Smooth: "15px", Circle: "30px" };

  const backgrounCC = {
    Primary: "red",
    Hover: "orange",
    Deactive: "yellow",
  };

  const Buttonstyle: CSSProperties = {
    borderRadius: borderRR[props.borderRadius],
    backgroundColor: backgrounCC[props.backgroundColor],
    color: "black",
    padding: "10px 5px",
    fontSize: "20px",
    border: "none",
  };
  return <button style={Buttonstyle}>버튼이름름름</button>;
};

export default Button;
