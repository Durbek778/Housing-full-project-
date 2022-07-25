import React, { useState } from "react";
import Category_card from "./Category_Card";
import { Container } from "./style";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";

const Category = () => {
  const [data, setData] = useState();
  useQuery(
    "",
    () => {
      return fetch("https://houzing-app.herokuapp.com/api/v1/categories").then(
        (res) => res.json()
      );
    },
    {
      onSuccess: (res) => {
        const item = res.data.map((res) => {
          return <Category_card title={res.category} />;
        });
        setData(item);
        console.log(res.data, "caegory list");
      },
    }
  );

  return (
    <Container>
      <h1 className="title center">Category</h1>
      <p className="center description">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <AliceCarousel
        items={data}
        arrows={false}
        responsive={{
          0: {
            items: 1,
          },
          780: {
            item: 2,
          },
          1024: {
            items: 4,
          },
          1800: {
            items: 5,
          },
        }}
      />
    </Container>
  );
};

export default Category;
