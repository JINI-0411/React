type FruitProps = {
  fruitName: string;
  fruitAmount: number;
  click: () => void;
};

const Fruit = (props: FruitProps) => {
  return (
    <span onClick={props.click}>
      {props.fruitName} :{props.fruitAmount}
    </span>
  );
};

export default Fruit;
//하나를 컴포넌트로 변경할 거
//이름이랑 갯수가 다른거라 프롭으로 받기
