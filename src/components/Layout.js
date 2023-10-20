import React from 'react'
import Header from './Header'
import Footer from "./Footer"
import Hero from './Hero';
import Servicios from './Servicios';
import Formulario from './Formulario';


export default function Layout(props) {
    const {children} = props;
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    {children}
    <Servicios></Servicios>
    
    <Footer></Footer>
    
    
    
    
    </>
  )
}
