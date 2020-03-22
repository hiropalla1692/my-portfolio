import React from "react"
import styled from 'styled-components'
import posed from 'react-pose';
import '../styles/pose.css';

const Box = posed.button({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 480px;
font-family: 'Montserrat', sans-serif;
`

class TitleBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <Box className="box" >{this.props.title}</Box>
      </Wrapper>
    )
  };
};

export default TitleBox;

