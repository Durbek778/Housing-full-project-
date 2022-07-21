import React from 'react' 
import { Container, Icon, Wrapper, Fragment, Title  } from './style'
import Input from '../Generic/Input'
import  Button  from '../Generic/Button'
import {ReactComponent as SearchHome } from '../../assets/icons/searchHome.svg'
import { Popover } from 'antd';

const Filter = () => {

  const content = (
    <Wrapper>
      <Title>Address</Title>
      <Fragment>
        <Input placeholder='type...' width='200px'/>
        <Input placeholder='type...' width='200px'/>
        <Input placeholder='type...' width='200px'/>
        <Input placeholder='type...' width='200px'/>
      </Fragment>
      <Title>Appartment info</Title>
      <Fragment>
        <Input placeholder='type...'  />
        <Input placeholder='type...'  />
        <Input placeholder='type...'  />
      </Fragment>
      <Title>Price</Title>
      <Fragment>
        <Input  placeholder='type...' />
        <Input  placeholder='type...' />
      </Fragment>
    </Wrapper>
  );
  
  return (
    <Container>
      <Input 
       pl={'50px'} 
       placeholder='Enter an address, neighborhood, city or ZIP code'>
      <SearchHome/>
      </Input>
      <Popover 
        trigger='click' 
        content={content} 
        placement="bottomLeft"
      >
        <div>
        <Button type={'secondary'} width={'131px'}>
          <Icon.Setting/>  
          Advanced
        </Button>
        </div>
      </Popover>
      <Button type={'primary'} width={'131px'}>
        <Icon.Search/>
        Search
      </Button>
    </Container>
  )
}

export default ( Filter )
