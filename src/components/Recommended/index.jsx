import React, { useEffect } from "react";
import { Container } from "./style";
import AliceCarousel from "react-alice-carousel";
import { Card } from "../Generic";
import { useQuery } from "react-query";
import { useState } from "react";

const Recommended = () => {
  const [data_Items, setData_items] = useState();

  useQuery(
    "test",
    () => {
      return fetch("https://houzing-app.herokuapp.com/api/v1/houses/list").then(
        (res) => res.json()
      );
    },
    {
      onSuccess: (res) => {
        const data = res?.data.map((item) => {
          return <Card info={item} />;
        });

        setData_items(data);
        // console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return (
    <Container>
      <h1 className="title">Recommended</h1>
      <p className="describtion">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <AliceCarousel
        mouseTracking
        items={data_Items}
        arrows={false}
        responsive={{
          0: {
            items: 1,
          },
          780: {
            item: 2,
          },
          1024: {
            items: 3,
          },
        }}
      />
    </Container>
  );
};

export default Recommended;
