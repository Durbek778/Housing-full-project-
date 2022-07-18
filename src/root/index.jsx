import React from 'react'
import { Navbar } from '../components/Navbar'
import {Routes, Route, Navigate} from 'react-router-dom'
import { navbar } from '../utils/navbar'
import ErorrPage from '../pages/Error'

export const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar/>}>
        <Route path='/' element= {<Navigate to={'./home'}/>}/>
        {navbar.map((value) => {
          return (
            <Route key={value.id} path={value.path} element={value.element}/> 
          )
        })}     
      </Route>
      <Route path='*' element={<ErorrPage/>}/>
    </Routes>
  )
}

export default Root
