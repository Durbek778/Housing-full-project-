import React from "react";
import Filter from "../../components/Filter";
import { Body, Container, ButtonWrapper } from "./style";
import { Card } from "../../components/Generic/Card";
import { useState } from "react";
import { useQuery } from "react-query";
import Button from "../../components/Generic/Button";
import { type } from "@testing-library/user-event/dist/type";

const Properties = () => {
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
        console.log(res);
      },
      onError: (err) => {
        // console.log(err);
      },
    }
  );

  return (
    <Container>
      <Filter />
      <h1 className="title">Properties</h1>
      <p className="describtion">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Body>{data_Items}</Body>
      <ButtonWrapper>
        <Button type={"primary"} width={"250px"}>
          Show more
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Properties;
