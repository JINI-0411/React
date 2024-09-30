import { useState } from "react";

const Cafe = () => {
  const [coffee, setcoffee] = useState({
    americano: { amount: 0, price: 1000 },
    latte: { amount: 0, price: 2000 },
    tea: { amount: 0, price: 2500 },
  });

  const changeamericano = () => {
    setcoffee((prev) => {
      return {
        ...prev,
        americano: { amount: prev.americano.amount + 1, price: 1000 },
      };
      // 버튼을 누르면 그만큼 추가가 되는거니 버튼내장이라고 생각하면 될려나?
    });
  };

  const changelatte = () => {
    setcoffee((prev) => {
      return { ...prev, latte: { amount: prev.latte.amount + 1, price: 2000 } };
    });
  };

  const changetea = () => {
    setcoffee((prev) => {
      return { ...prev, tea: { amount: prev.tea.amount + 1, price: 2500 } };
    });
  };
  return;
};

export default Cafe;
