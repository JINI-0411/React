import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const plusClick = () => {
    setNum((prev) => prev + 1);
  };
  const minusClick = () => {
    setNum((prev) => (prev == 0 ? 0 : prev - 1));
  };

  return;
  <>
    <button onClick={minusClick}>-</button>
    <span style={{ backgroundColor: num >= 10 ? "red" : "white" }}>{num}</span>
    <button onClick={plusClick}>+</button>
  </>;
};
export default Counter;

//counter.tsx - 0 + 있음
// 10개 이상되면 버튼의 배경색깔 빨간색으로 변하게 하기

// + , - 버튼을 누르면 변경되는거니 if문을 써야되나?
