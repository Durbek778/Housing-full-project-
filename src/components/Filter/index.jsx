import React from 'react'
import { Container } from './style'
import Input from '../Generic/Input'
import  Button  from '../Generic/Button'


const Filter = () => {
  return (
    <Container>
      <Input placeholder='Enter an address, neighborhood, city or ZIP code'/>
      <Button width={'131px'}>Advanced</Button>
      <Button width={'131px'}>Search</Button>
    </Container>
  )
}

export default ( Filter )
