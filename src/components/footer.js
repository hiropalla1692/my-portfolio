import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  max-width: 650;
  text-align: center;
  color: white;
  padding: 0 1rem;
  @media screen and (max-width:480px) {
    flex-flow: column wrap;
  }
  p {
    margin: 0;
    font-size: 12px;
  }
`
const Contact = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  text-align: center;
  color: white;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
  h4 {
    color: white;
    margin: 10px 0 20px 0;
  }
  li {
    text-align: start;
    font-size: 12px;
  }
`


export default () => (
  <Wrapper>
    <Contact id="contact">
      <h4>Contact</h4>
      <li>📩<a href="mailto:hirokuni0719@gmail.com">hirokuni0719@gmail.com</a></li>
      <li><a target="_blank" href="https://github.com/hiropalla1692/">Github</a></li>
      <li><a target="_blank" href="https://www.wantedly.com/users/82225561">Wantedly</a></li>
    </Contact>
    <div>
      <p>© Hirokuni Honda 2020, Built with Gatsby</p>
    </div>
  </Wrapper>
)