import { CSSProperties } from "react";

export type TiaImegeProps = {
  Tiaimegstyle: string;
};

const TiaImege = (props: TiaImegeProps) => {
  const TiaMap: any = {
    1: "https://s-lol-web.op.gg/images/icon/icon-tier-1.svg?v=1724034092925",
    2: "https://s-lol-web.op.gg/images/icon/icon-tier-2.svg?v=1724034092925",
    3: "https://s-lol-web.op.gg/images/icon/icon-tier-3.svg?v=1724034092925",
    4: "https://s-lol-web.op.gg/images/icon/icon-tier-4.svg?v=1724034092925",
    5: "https://s-lol-web.op.gg/images/icon/icon-tier-5.svg?v=1724034092925",
  };

  return (
    <div>
      <img src={TiaMap} alt="" />
      {props.Tiaimegstyle}
    </div>
  );
};

export default TiaImege;
