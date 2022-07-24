import React from 'react'
import { Container } from './style'
import AliceCarousel from 'react-alice-carousel';
import { Card } from '../Generic';

const Recommended = () => {

useQuery('', ()=> {
  return fetch ('https://houzing-app.herokuapp.com/api/v1/houses/list').then((res)=>res.json())
},{
  onSuccess: (res)=>{
    ///
  },
  onError:(err)=>{
    console.log(err);
  }
})

  const items = [
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
  ];

  return (
    <Container>
      <h1 className='title'>Recommended</h1>
      <p className='describtion'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <AliceCarousel
       mouseTracking 
       items={items}
       arrows={false}
       responsive= {
        {
          0: {
              items: 1,
          },
          780: {
            items: 2,
          },
          1024: {
              items: 3
          }
        }
       } />
    </Container>
  )
} 

export default Recommended;  