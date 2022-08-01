import styled from "styled-components";

const Container = styled.div`
  /* display: flex; */
  text-align: center;
`;

const Body = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  width: 100%;
  padding: 0 130px;
  max-width: var(--width);
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  margin: 45px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export { Container, Body, ButtonWrapper };
