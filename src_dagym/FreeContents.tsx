import { CSSProperties } from "react";

export type FreeContentProps = {
  services: string;
};

const FreeContent = (props: FreeContentProps) => {
  const FreeContentStyle: CSSProperties = {
    backgroundColor: "#f1f3f6",
    padding: "8px 12px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "conter",
    gap: "15px",
  };

  const serviceStyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#999FA9",
  };

  const freeStyle: CSSProperties = {
    fontSize: "12px",
  };

  return (
    <div style={FreeContentStyle}>
      <span style={serviceStyle}>무료 서비스</span>
      <span style={freeStyle}>{props.services}</span>
    </div>
  );
};

export default FreeContent;
