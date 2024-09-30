import { CSSProperties, useState } from "react";

export type MoosinStyle = {
  name: string;
  price: number;
};

const Moosin = (props: MoosinStyle) => {
  const box: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
    border: "1px solid gray",
    width: "500px",
  };

  const [num, setNum] = useState(1);
  const plus = () => {
    setNum((prev) => prev + 1);
  };

  const minus = () => {
    setNum((prev) => (prev == 1 ? 1 : prev - 1));
  };

  const add = () => {};

  return (
    <div style={box}>
      <div>
        <button onClick={plus}></button>
        <span>{num}</span>
        <button onClick={minus}></button>
      </div>
      <div>
        <span>{props.name}</span>
      </div>
      <div>
        <span>{props.price * num}</span>
      </div>
    </div>
  );
};

export default Moosin;
