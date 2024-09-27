import { CSSProperties } from "react";
import { RankElevatorProps } from "./RankElevator";
import { ChampionImageProps } from "./ChampionImage";
import { ChampionNameProps } from "./ChampionName";
import { TiaImegeProps } from "./TiaImage";
import { PositionProps } from "./Position";
import { WinlabelProps } from "./Label/Winlabel";
import { PiclabelProps } from "./Label/Piclabel";
import { BenlabelProps } from "./Label/Benlabel";

export type CardLayProps = RankElevatorProps &
  ChampionImageProps &
  ChampionNameProps &
  TiaImegeProps &
  PositionProps &
  WinlabelProps &
  PiclabelProps &
  BenlabelProps;

const Card = (props: CardLayProps) => {
  const CardStyle: CSSProperties = {
    padding: "5px",
    display: "flex",
    flexDirection: "row",
  };
  return (
    <article style={CardStyle}>
      <section>
        <div>{props.elevatorImg}</div>
        <div>{props.championimage}</div>
        <div>{props.championNamestyle}</div>
        <div>{props.Tiaimegstyle}</div>
        <div>{props.positionStyle}</div>
        <div>{props.winpercent}</div>
        <div>{props.picpercent}</div>
        <div>{props.benpercent}</div>
      </section>
    </article>
  );
};
export default Card;
