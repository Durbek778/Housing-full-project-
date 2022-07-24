  import React from 'react';
  import { Card_item, Img, InfoWrapper, Price,
     IconWrapperMiddle, Icon, IconAndDes, PricePerMonth, BottomIcons } from './style';


  export const Card = ({ info, onClick }) => {
    return (
    <Card_item className='nocopy' onClick={onClick}>
      <Img  />
      <InfoWrapper>
        <h2 > New Appartment nice wiev</h2>
        <p>Quincy St, Brooklyn, NY, USA </p>
        <IconWrapperMiddle>
          <IconAndDes>
           <Icon.Bed/>
           <p> 4 beds</p>
          </IconAndDes>
          <IconAndDes>
            <Icon.Baths/>
            <p> 5 Baths</p>
          </IconAndDes>
          <IconAndDes>
            <Icon.Garage/>
            <p> 1 Garage</p>
          </IconAndDes>
          <IconAndDes>
            <Icon.Square/>
            <p> 1200 Sq Ft</p>
          </IconAndDes>
        </IconWrapperMiddle>
      </InfoWrapper>
      <Price>
        <PricePerMonth>
          <h2> $7,500/mo</h2>
        </PricePerMonth>
        <BottomIcons>
          <Icon.Resize/>
          <Icon.Love/>
        </BottomIcons>
      </Price>
    </Card_item>
    )
}

export default Card