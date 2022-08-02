import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ImgPath from "./ImgPath";
import { Container, Wrapper } from "./style";

export const Detailes = () => {
  const { REACT_APP_BASE_URL: url } = process.env;

  const { id } = useParams();

  const { data } = useQuery(
    "gethouse by id",
    () =>
      fetch(`${url}/v1/houses/${id?.replace(":", "")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
    {
      onSuccess: (res) => {},
    }
  );

  return (
    <Container>
      <Wrapper>
        <ImgPath />
      </Wrapper>
    </Container>
  );
};
export default Detailes;
