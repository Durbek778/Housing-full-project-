import React from "react";
import { Container, Input, Form, Title, Error } from "./style";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignIn() {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // console.log(email, password);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("email xato").required("email kiritilmadi"),
      password: Yup.string()
        .max(8, "8 tadan kop bolmasin")
        .min(4, "4 tadan kam bolmasin")
        .email("password xato")
        .required("password kiritilmadi"),
    }),
  });

  console.log(formik.values);

  return (
    <div>
      <Container>
        <Title>Royhatdan O`tish</Title>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Error>{formik.errors.email}</Error>
          <Input
            type="password"
            name=""
            id="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Error>{formik.errors.password}</Error>
          <button type="submit" onClick={formik.onSubmit}>
            Submit
          </button>
          <input type="number" pattern="[0-5]" required />
        </Form>
      </Container>
      ;
    </div>
  );
}
