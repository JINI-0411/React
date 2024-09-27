import { CSSProperties } from "react";

export type RankElevatorProps = {
  elevatorImg: string;
};

const RankElevator = (props: RankElevatorProps) => {
  const RankElevatorStyle: CSSProperties = {
    width: "10px",
    height: "10px",
  };

  return (
    <div style={RankElevatorStyle}>
      <img
        src={"https://s-lol-web.op.gg/images/icon/icon-up-small-green.svg"}
        alt=""
      />
    </div>
  );
};
export default RankElevator;
