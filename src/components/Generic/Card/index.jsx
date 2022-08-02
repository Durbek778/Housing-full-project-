import React from "react";
import noimg from "../../../assets/imgs/noimg.png";
import nouser from "../../../assets/imgs/nouser.png";

import {
  Container,
  Image,
  InfoWrapper,
  Price,
  User,
  Info,
  Icons,
} from "./style";

export const Card = ({ info, mr, ml, margin, onClick }) => {
  return (
    <Container mr={mr} ml={ml} margin={margin} onClick={onClick} key={info.id}>
      <Image src={info?.attachments[0]?.imgPath || noimg} alt="house image" />
      <InfoWrapper>
        <User>
          {/* here should be an user picture */}
          <User.Img src={nouser} />
        </User>
        <Info.Title>
          {info?.description || "Description"} Category: {info?.category?.name}
        </Info.Title>
        <Info.Text>
          {info?.name || "House"}, {info?.address || "Addres"}, {""}
          {info?.city || "City"}, {info?.country || "Country"}.
        </Info.Text>
        <Info.Detailes>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>{info?.houseDetailes?.bed || 0} Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Beth />
            <Info.Text>{info?.houseDetailes?.beth || 0} Baths</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Garage />
            <Info.Text>{info?.houseDetailes?.bed || 0} Garages</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Ruler />
            <Info.Text>{info?.houseDetailes?.bed || 0} Sq Ft</Info.Text>
          </Icons.Wrapper>
        </Info.Detailes>
      </InfoWrapper>
      <Price>
        <Price.Wrapper>
          <Price.Sale>{info?.salePrice || 0} / month</Price.Sale>
          <Price.Origin>{info?.price || 0} / month</Price.Origin>
        </Price.Wrapper>
        <Price.IconWrapper>
          <Icons.Resize />
          <Icons.Love />
        </Price.IconWrapper>
      </Price>
    </Container>
  );
};

export default Card;
