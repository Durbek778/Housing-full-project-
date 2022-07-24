import styled from "styled-components";
import { Carousel } from 'antd'
import { ReactComponent as arrow } from "../../../assets/icons/left-arrow.svg";
import { ReactComponent as rarrow } from "../../../assets/icons/right-arrow.svg";
import carousel1 from '../../../assets/imgs/uy1.png'

const CarouselWrapper = styled('div')`
position: relative;
width: 100%;
z-index: 1;
`

const MainCarousel = styled(Carousel)`
height: fit-content;
min-height: 160px;

`
const Wrap = styled.div`
`
const Card = styled.div`
background: white;
opacity: 0.5;
z-index: 3;
color: black;
border-radius: 10px;

`

const Content = styled.div`
color: white;
font-size: 25px;
width: 100%;
height: 75vh;
display: flex;
justify-content: center;
align-items: center;
background: url(${carousel1});
background-size: cover;
position: relative;
&::before{
 content: "";
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.65);
 position: absolute;
 z-index: 0;
}
`

const Icon = styled.div``

Icon.Left = styled(arrow)`
display: flex;
position: absolute;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
left: 0px;
transform: translate(100%, -50%);
width: 45px;
height: 45px;
color: white;
background: white;
padding: 12px;
opacity: 0.5;
border-radius: 50%;
z-index: 999;
cursor: pointer;
:hover {
    opacity: 0.97;
 } 
& path {
    fill: #0d263b;
}
`;

Icon.Right = styled(rarrow)`
display: flex;
position: absolute;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
right: 0px;
transform: translate(-100%, -40%);
width: 45px;
height: 45px;
color: white;
background: white;
padding: 12px;
opacity: 0.5;
border-radius: 50%;
z-index: 999;
cursor: pointer;
:hover {
    opacity: 0.97;
}
& path {
    fill: #0d263b;
}
`;

export { CarouselWrapper, MainCarousel, Icon, Wrap, Content, Card}