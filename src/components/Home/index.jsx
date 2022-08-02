import React from "react";
import Filter from "../Filter";
import { Container } from "./style";
import Carousell from "./Carousel";
import Recommended from "../Recommended";
import Category from "../Category";

export const Home = () => {
  return (
    <Container>
      <p>home</p>
      <Filter />
      <Carousell />
      <Recommended />
      <Category />
    </Container>
  );
};

export default Home;
