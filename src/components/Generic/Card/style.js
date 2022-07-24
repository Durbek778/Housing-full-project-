import styled from "styled-components";
import { ReactComponent as bed } from "../../../assets/icons/bed.svg";
import { ReactComponent as baths } from "../../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../../assets/icons/garage.svg";
import { ReactComponent as square } from "../../../assets/icons/square.svg";
import { ReactComponent as resize } from "../../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../../assets/icons/love.svg";
import uy3 from '../../../assets/imgs/uy3.png'

const Card_item = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 250px;
width: 380px;
background: #ffffff;
border-radius: 3px #E6E9EC;
:hover{
    filter: 
    drop-shadow(0px, 20px, 38px,rgba(0,0,0,0.06)),
    drop-shadow(0px, 7px, 46px,rgba(0,0,0,0.06)),
    drop-shadow(0px, 8px, 15px,rgba(0,0,0,0.06));
}
`;

const Img = styled.div`
min-height: 220px;
max-height: 220px;
width: 100%;
background: url(${uy3});
`

const InfoWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
padding: 25px;
border: 1px whitesmoke solid;
`


const IconWrapperMiddle = styled.div`
display: flex;
justify-content: space-evenly;
/* align-items: center; */
gap: 30px;
`
const IconAndDes = styled.div`
display: flex;
flex-direction: column;
align-items:center ;
`

const Icon = styled.div``

Icon.Bed = styled(bed)`
width: 20px;
height: 20px;
`
Icon.Baths = styled(baths)`
width: 20px;
height: 20px;
`
Icon.Garage = styled(garage)`
width: 20px;
height: 20px;
`
Icon.Square = styled(square)`
width: 20px;
height: 20px;
`
Icon.Resize = styled(resize)`
width: 20px;
height: 20px;
`
Icon.Love = styled(love)`
width: 35px;
height: 35px;
`

const Price = styled.div`
display: flex;
border: 1px whitesmoke solid;
height: 60px;
`
const PricePerMonth = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
` 
const BottomIcons = styled.div`
display: flex;
margin-left: auto;
align-items: center;
justify-content: space-evenly;
gap: 20px;
margin-right: 20px;
`


export {Card_item, Img, InfoWrapper, Price, IconWrapperMiddle,
     Icon, IconAndDes, PricePerMonth, BottomIcons}