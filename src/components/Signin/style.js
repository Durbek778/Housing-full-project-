import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 60vh;
  font-family: "Fira Code", monospace;
`;

const Title = styled.div`
  font-size: 40px;
`;

const Input = styled.input`
  border: 2px solid gray;
  padding: 10px 20px;
`;

const Form = styled.form`
  display: grid;
  gap: 10px;
`;

const Error = styled.p`
  font-size: 12px;
  color: red;
`;

export { Container, Input, Form, Title, Error };
