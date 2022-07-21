import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as arrow } from "../../../assets/icons/left-arrow.svg";
import { ReactComponent as rarrow } from "../../../assets/icons/right-arrow.svg";

const CarouselWrapper = styled('div')`
position: relative;
width: 100%;
`

const MainCarousel = styled('div')`
height: fit-content;
`

const Img = styled.img`
background: black;
width: 100%;
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

export { CarouselWrapper, MainCarousel, Icon, Img}