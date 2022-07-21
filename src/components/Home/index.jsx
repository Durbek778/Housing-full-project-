import React from 'react'
import Filter from '../Filter'
import { Container } from './style'
import { Carousel } from './Carousel'


const Home = () => {
  return (
    <Container>
        <Filter />
        <Carousel />
    </Container>
  )
}

export {Home}
