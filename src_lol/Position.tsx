import { CSSProperties } from "react";

export type PositionProps = {
  positionStyle: string;
};

const Position = (props: PositionProps) => {
  const positionMap: any = {
    TOP: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-top.svg?v=1724034092925",
    MID: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-mid.svg?v=1724034092925",
    JUNGLE:
      "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-jng.svg?v=1724034092925",
    SUPPORT:
      "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-sup.svg?v=1724034092925",
    BOT: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-bot.svg?v=1724034092925",
  };

  return (
    <div style={positionMap}>
      <img style={{ width: "15px", height: "15px" }} src="" alt="" />
    </div>
  );
};

export default Position;
