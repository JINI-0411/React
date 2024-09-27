import { CSSProperties } from "react";

export type ChampionRoundProps = {
  ChampionRoundImage: string;
};

const ChampionRound = (props: ChampionRoundProps) => {
  const ChampionRoundStyle: CSSProperties = {
    width: "15px",
    height: "15px",
    borderRadius: "9999px",
    gap: "3px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  return (
    <div style={ChampionRoundStyle}>
      <img
        src={
          "https://opgg-static.akamaized.net/meta/images/lol/…_9/q_auto:good,f_webp,w_160,h_160&v=1724034092925"
        }
        alt=""
      />
    </div>
  );
};
export default ChampionRound;
