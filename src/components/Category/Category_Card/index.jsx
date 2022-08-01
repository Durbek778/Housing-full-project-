import React from "react";
import { Container, Title, Img } from "./style";
import img from "../../../assets/imgs/tempCatImg.png";

const Category_card = ({ title }) => {
  return (
    <Container>
      <Title>{title?.name || "Category"} </Title>
      <Img src={img} />
    </Container>
  );
};

export default Category_card;
