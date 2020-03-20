import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 3rem auto ;
  max-width: 650;
  color: white;
  background-color: black;
  padding: 0 1rem;
`

export default () => (
  <Wrapper>
    <p>© Hirokuni Honda 2020, Built with Gatsby</p>
  </Wrapper>
)