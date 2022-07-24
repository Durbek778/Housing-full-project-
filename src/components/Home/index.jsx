import React from 'react'
import Filter from '../Filter'
import { Container } from './style'
import Carousell from './Carousel'
import Recommended from '../Recommended'




const Home = () => {
  return (
    <Container>
        <Filter />
        <Carousell />
        <Recommended/>
    </Container>
  )
}

export {Home}
