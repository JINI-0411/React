import { CSSProperties } from "react";

type ButtonCSS = { color: string; padding: string };
type ButtonText = { text: string };

type ButtonProps = ButtonCSS & ButtonText;
// type Buttonprops = {
//   padding: string;
//   text: string; // 텍스트라고 해도 되고 컨텐츠라고 해도됌
//   color: string;
// };
// ㄴ 이걸 각각(관련된것들로 해서)으로 해서 구분지을수도 있음

const Button = ({ color, padding, text }: ButtonProps) => {
  const Buttonstyle: CSSProperties = {
    padding,
    color,
  };

  return <button style={Buttonstyle}>{text}</button>;
};

export default Button;
