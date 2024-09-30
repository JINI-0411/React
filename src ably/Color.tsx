import { CSSProperties } from "react";

const Color = () => {
  const Box: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    lineHeight: "15px",
  };

  const ColorStyle: CSSProperties = {
    fontWeight: "bold",
    fontSize: "15px",
    color: "red",
  };

  const DeliveryStyle: CSSProperties = {
    fontWeight: "bold",
    fontSize: "8PX",
  };

  return (
    <div style={Box}>
      <span style={ColorStyle}>아이보리/FREE</span>
      <span style={DeliveryStyle}>일반배송</span>
    </div>
  );
};

export default Color;
