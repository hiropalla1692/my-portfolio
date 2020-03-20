import React from "react"
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'


const Wrapper = styled.div`
`

export default ({ children }) => (
  <Wrapper id='root'>
    <Header/>
    {children}
    <Footer/>
  </Wrapper>
)