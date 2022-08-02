import React from "react";
import Filter from "../../components/Filter";
import { Body, Container, ButtonWrapper } from "./style";
import { Card } from "../../components/Generic/Card";
import { useState } from "react";
import { useQuery } from "react-query";
import Button from "../../components/Generic/Button";
import { useNavigate } from "react-router-dom";

const Properties = () => {
  const [data_Items, setData_items] = useState();
  const navigate = useNavigate();

  useQuery(
    "test",
    () => {
      return fetch("https://houzing-app.herokuapp.com/api/v1/houses/list").then(
        (res) => res.json()
      );
    },
    {
      onSuccess: (res) => {
        setData_items(res?.data);
        // console.log(res, "res");
      },
      onError: (err) => {
        // console.log(err);
      },
    }
  );
  console.log(data_Items);
  return (
    <Container>
      <Filter />
      <h1 className="title">Properties</h1>
      <p className="describtion">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Body onClick={() => navigate(`/properties${data_Items.id}`)}>
        {/* {data_Items.map((f) => {
          return <Card info={f} />;
        })} */}
      </Body>
      <ButtonWrapper>
        <Button type={"primary"} width={"250px"}>
          Show more
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Properties;
