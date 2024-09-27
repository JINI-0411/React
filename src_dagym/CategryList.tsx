import { CSSProperties } from "react";

export type CategoryListprops = {
  categories: string;
};

const CategoryList = (props: CategoryListprops) => {
  const CategoryStyle: CSSProperties = {
    color: "#999fa9",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "20px",
  };

  return <span style={CategoryStyle}>{props.categories}</span>;
};

export default CategoryList;
