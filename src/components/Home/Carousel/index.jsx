import React, {useRef} from 'react'
import { CarouselWrapper , Icon, Img,  } from './style'
import img1 from '../../../assets/imgs/uy1.png'

import { Carousel } from 'antd'

export const Carousell = () => {
  const durbek = useRef()

  return (
    <CarouselWrapper>
      <Icon.Left onClick={() => durbek.current?.next()} />
      <Icon.Right onClick={() => durbek.current?.prev()} />
      <Carousel ref={durbek} dots autoplay>
        <div>
          <Img src={img1} alt='img' />,
        </div> 
        <div>
          <Img src={img1} alt='img' />,
        </div>
        <div>
          <Img src={img1} alt='img' />,
        </div>
      </Carousel>
    </CarouselWrapper>
  )
}

export default Carousell