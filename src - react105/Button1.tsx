import { useState } from "react";

const Button1 = () => {
  const [food, setFood] = useState("마라탕");

  const abc = () => {
    setFood((prev) => {
      return prev + "후루 사주세요";
    }); // prev는 전에 있던거
  };

  return <button onClick={abc}>{food}</button>;
};

export default Button1;
