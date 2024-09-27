import { CSSProperties } from "react";

export type tagProps = {
  text: string;
};
const Tag = (props: tagProps) => {
  const tagStyle: CSSProperties = {
    padding: "3px 6px",
    fontSize: "10px",
    borderRadius: "4px",
    fontWeight: "bold",
    backgroundColor: "#eaeeff",
    color: "#5467f5",
    border: "1px solid #eaeeff",
  };

  return <span style={tagStyle}>{props.text}</span>;
};
export default Tag;
