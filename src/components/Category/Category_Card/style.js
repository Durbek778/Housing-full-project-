import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 350px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  position: relative;
`;

const Title = styled.div`
  width: 100%;
  font-family: "Fira Code", monospace;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  position: absolute;
  top: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img``;

export { Container, Title, Img };
