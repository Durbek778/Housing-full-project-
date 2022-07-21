import React from 'react'
import Filter from '../Filter'
import { Container } from './style'
import Carousell, { Carousel } from './Carousel'


const Home = () => {
  return (
    <Container>
        <Filter />
        <Carousell />
    </Container>
  )
}

export {Home}
