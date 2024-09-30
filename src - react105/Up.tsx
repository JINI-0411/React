import { useState } from "react";

const Up = () => {
  const [number, setnumber] = useState(0); // 바뀌는 거니까 스테터스 쓰고 이부분이
  // 초기값이고 무조건 셋다음에 앞에꺼 써주기
  // [a,b]=(가, 나, 다, 라) 면 a는 가, b는 나를 응용한거

  const plus = () => {
    setnumber((prev) => {
      return prev + 1;
    });
  };

  return <button onClick={plus}>{number}</button>;
};

export default Up;
