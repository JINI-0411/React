import { CSSProperties } from "react";
import Album, { AlbumProps } from "./Album";
import CategoryList, { CategoryListprops } from "./CategryList";
import GymName, { GymNameProps } from "./GymName";
import StarRate, { StarRateProps } from "./SartRate";
import Reviews, { ReviewsProps } from "./Reviews";
import Address, { AddressProps } from "./Address";
import Tag, { tagProps } from "./Tag";
import Price, { priceProps } from "./Price";

export type CardUpperProps = AlbumProps &
  CategoryListprops &
  GymNameProps &
  StarRateProps &
  ReviewsProps &
  AddressProps &
  tagProps &
  priceProps;

const CardUpper = (props: CardUpperProps) => {
  const CardUpperStyle: CSSProperties = {
    display: "flex",
    gap: "10px",
  };

  const rightStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
  };

  const infoStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const eventStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <div style={CardUpperStyle}>
      <Album image={props.image} />
      <div style={rightStyle}>
        <div style={infoStyle}>
          <CategoryList categories={props.categories} />
          <GymName gymName={props.gymName} />
          <div>
            <StarRate starRate={props.starRate} />
            <Reviews reviews={props.reviews} />
            <Address address={props.address} />
          </div>
        </div>
        <div style={eventStyle}>
          <Tag text={props.text} />
          <Price price={props.price} />
        </div>
      </div>
    </div>
  );
};

export default CardUpper;
