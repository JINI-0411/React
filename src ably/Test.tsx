import { useState } from "react";
import Fruit from "./Fruit";

// 사과: 1000원, 바나나:1500원 , 오렌지: 2000원  + 총가격
const Test = () => {
  const [fruits, setFruits] = useState({
    apple: { amount: 0, price: 1000 },
    banana: { amount: 0, price: 1500 },
    orange: { amount: 0, price: 2000 },
  });

  const changeApple = () => {
    setFruits((prev) => {
      return { ...prev, apple: { amount: prev.apple.amount + 1, price: 1000 } };
    });
  };

  const changebanana = () => {
    setFruits((prev) => {
      return {
        ...prev,
        banana: { amount: prev.banana.amount + 1, price: 1500 },
      };
    });
  };

  const changeorange = () => {
    setFruits((prev) => {
      return {
        ...prev,
        orange: { amount: prev.orange.amount + 1, price: 2000 },
      };
    });
  };
  return (
    <div>
      <Fruit
        click={changeApple}
        fruitName="사과"
        fruitAmount={fruits.apple.amount}
      ></Fruit>
      {/* 여기서 클릭은 Fruit에서 프롭따라옴 */}
      <button onClick={changeApple}>사과 :{fruits.apple.amount}</button>
      <button onClick={changebanana}>바나나 :{fruits.banana.amount}</button>
      <button onClick={changeorange}>오렌지 :{fruits.orange.amount}</button>
      <span>
        총 갯수{" "}
        {fruits.apple.amount + fruits.banana.amount + fruits.orange.amount}
      </span>
      <span>
        총 가격{" "}
        {fruits.apple.amount * fruits.apple.price +
          fruits.banana.amount * fruits.banana.price +
          fruits.orange.amount * fruits.orange.price}
      </span>
    </div>
  );
};

export default Test;
