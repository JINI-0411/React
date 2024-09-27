import { CSSProperties } from "react";

export type ChampionImageProps = {
  championimage: string;
};

const ChampionImage = (props: ChampionImageProps) => {
  const ChampionImageStyle: CSSProperties = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    padding: "3px 5px",
  };
  return (
    <div style={ChampionImageStyle}>
      <img
        src={
          "https://opgg-static.akamaized.net/meta/images/lol/…_9/q_auto:good,f_webp,w_160,h_160&v=1724034092925"
        }
        alt=""
      />
    </div>
  );
};

export default ChampionImage;
