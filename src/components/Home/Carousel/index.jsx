import React, {useRef} from 'react'
import { CarouselWrapper , Icon, MainCarousel, Content, Wrap, Card } from './style'
import carousel2 from '../../../assets/imgs/uy2.png'




export const Carousell = () => {
  const durbek = useRef()

  return (
    <CarouselWrapper>
      <Icon.Left onClick={() => durbek.current?.prev()} />
      <Icon.Right onClick={() => durbek.current?.next()} />
      <MainCarousel ref={durbek} dots autoplay>
        <Wrap>
          <Content >
            <Card>
              <h1> Sky Pool Aaprtment 1</h1>
              <p> 112 Glenwood Ave Hyde Park, Boston, Ma</p>
            </Card>
          </Content >
        </Wrap> 
        <Wrap>
        <Content >
            <Card>
              <h1> Sky Pool Aaprtment 2</h1>
              <p> 112 Glenwood Ave Hyde Park, Boston, Ma</p>
            </Card>
          </Content>
        </Wrap>
        <Wrap>
        <Content>
            <Card>
              <h1> Sky Pool Aaprtment 3</h1>
              <p> 112 Glenwood Ave Hyde Park, Boston, Ma</p>
            </Card>
          </Content>
        </Wrap>
        <Wrap>
        <Content>
            <Card>
              <h1> Sky Pool Aaprtment 4</h1>
              <p> 112 Glenwood Ave Hyde Park, Boston, Ma</p>
            </Card>
          </Content>
        </Wrap>
      </MainCarousel>
    </CarouselWrapper>
  )
}

export default Carousell