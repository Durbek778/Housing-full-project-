import React from "react";
import Filter from "../Filter";
import { Container } from "./style";
import Carousell from "./Carousel";
import Recommended from "../Recommended";
import Category from "../Category";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousell />
      <Recommended />
      <Category />
    </Container>
  );
};

export { Home };
