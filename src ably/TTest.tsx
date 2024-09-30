import { useState } from "react";

const Test = () => {
  const [fruits, setFruits] = useState({ apple: 0, banana: 0, orange: 0 });

  const changeApple = () => {
    setFruits((prev) => {
      return { ...prev, apple: prev.apple + 1 }; // 동일함
    });
  };

  const changebanana = () => {
    setFruits((prev) => {
      return { ...prev, banana: prev.banana + 1 }; // 동일함
    });
  };

  const changeorange = () => {
    setFruits((prev) => {
      return { ...prev, orange: prev.orange + 1 }; // 동일함
    });
  };
  return (
    <div>
      <button onClick={changeApple}>사과 :{fruits.apple}</button>
      <button onClick={changebanana}>바나나 :{fruits.banana}</button>
      <button onClick={changeorange}>오렌지 :{fruits.orange}</button>
      <span>총 갯수 {fruits.apple + fruits.banana + fruits.orange}</span>
    </div>
  );
};

export default Test;

// Test꺼 옮겨놓은거임
