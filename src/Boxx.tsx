import { CSSProperties } from "react";

//color: string은 backgroundColor: color, 을 넣어서 매개변수니까 이럴때는 props를 넣는게 약속

type propsType = {
  backgroundColor: string;
  height: string;
  width: string;
};

const Boxx = (props: propsType) => {
  const cssStyle: CSSProperties = {
    height: props.height,
    width: props.width,
    backgroundColor: props.backgroundColor,
  };

  return <div style={cssStyle}></div>;
};

export default Boxx;
