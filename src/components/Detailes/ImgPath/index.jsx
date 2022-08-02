import React from "react";
import { Container, Wrapper, Image } from "./style";
import h1 from "../../../assets/imgs/pic1.png";
import h2 from "../../../assets/imgs/pic2.png";
import h3 from "../../../assets/imgs/pic3.png";
import h4 from "../../../assets/imgs/pic4.png";
import h5 from "../../../assets/imgs/pic5.png";

const ImgPath = () => {
  return (
    <Container>
      <Wrapper.H1>
        <Image src={h1} />
      </Wrapper.H1>
      <Wrapper.H2>
        <Image src={h2} />
      </Wrapper.H2>
      <Wrapper.H3>
        <Image src={h3} />
      </Wrapper.H3>
      <Wrapper.H4>
        <Image src={h4} />
      </Wrapper.H4>
      <Wrapper.H5>
        <Image src={h5} />
        <Wrapper.Number>+15</Wrapper.Number>
      </Wrapper.H5>
    </Container>
  );
};

export default ImgPath;
