import React from "react"
import styled, { css } from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
height: 1200px;
align-items: center;
font-family: 'Montserrat', sans-serif;
@media screen and (max-width:480px) {
    height: 800px;
    font-size: 30px;
  }
`
const MyWorkBox = styled.div`
width: 100%;
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
`
const MyWork = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 300px;
width: 300px;
margin: 3% 3%;
border-radius: 13px;
vertical-align: middle;
text-align: center;
font-size: 80px;
color: white;
  @media screen and (max-width:768px) {
    height: 200px;
    width: 200px;
    font-size: 40px;
  }
  @media screen and (max-width:480px) {
    height: 150px;
    width: 150px;
    font-size: 30px;
  }
`

const MyWorkDetail = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
height: 300px;
width: 300px;
margin: 3% 3%;
padding: 2% 2%;
background-color: #3e3047;
font-size: 15px;
color: #d0cfe2;
border: solid 2px;
border-color: #3e3047;
border-radius: 10px;
box-shadow: 16px 16px white;
font-family: 'Arvo', sans-serif;
${props =>
    props.reverse &&
    css`
      box-shadow: -16px 16px white;
  `};

  &:hover {
      color: white;
      }
  h2 {
    margin: 8% 0%;
    color: white;
  }
  @media screen and (max-width:768px) {
    height: 200px;
    width: 200px;
    font-size: 12px;
      h2 {
        font-size: 15px;
      }
    }
  @media screen and (max-width:480px) {
    height: 150px;
    width: 150px;
    font-size: 9px;
    box-shadow: 3px 3px white;
    ${props =>
      props.reverse &&
      css`
      box-shadow: -3px 3px white;
    `};
      h2 {
        margin: 0;
        font-size: 13px;
      }
      p {
        margin: 0 0 5px 0 ;
      }
  }
`
const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  &:hover {
    background-color: white;
    color: #3e3047;
    }
  @media screen and (max-width:480px) {
  font-size: 9px;
  padding: 0.2rem 0;
  width: 6rem;
  }
`

function MyWorks(props) {
  return (
    <StaticQuery
    query={query}
    render={ data => (
      <Wrapper>
      <MyWorkBox>
        <MyWork>
          {/*<StyledImg fluid={data.vocamy.childImageSharp.fluid} />*/}
          [ 1 ]
        </MyWork>
        <MyWorkDetail>
          <h2>Vocamy🥑</h2>
          <p>enables you to aquire new vocablary refering to your favorite lyrics.</p>
          <Link to="/vocamy"><Button>>>> Go into details</Button></Link>
        </MyWorkDetail>
      </MyWorkBox>
      <MyWorkBox>
        <MyWorkDetail reverse>
          <h2>This Portfolio☕️</h2>
          <p> simply describes who I am and introduce my works with Gatsby.js</p>
          <Link to="/myportfolio"><Button>>>> Go into details</Button></Link>
        </MyWorkDetail>
        <MyWork>
          {/*<StyledImg fluid={data.myportfolio.childImageSharp.fluid} />*/}
          [ 2 ]
        </MyWork>
      </MyWorkBox>
      <MyWorkBox>
        <MyWork>
          {/*<StyledImg fluid={data.instanturlsender.childImageSharp.fluid} />*/}
          [ 3 ]
        </MyWork>
        <MyWorkDetail>
          <h2>Instant URL Sender📩</h2>
          <p> is a Chrome extension which gives you seamless experience between PC and cellphone</p>
          <Link to="/chrome_extension"><Button>>>> Go into details</Button></Link>
        </MyWorkDetail>
      </MyWorkBox>
    </Wrapper>
    )}
    />
  )
}

const query = graphql`
    query {
        vocamy: file(relativePath: {eq: "vocamy_screenshot.png"}) {
            childImageSharp{
                fluid( maxWidth: 450, quality: 100)
                  {
                    ...GatsbyImageSharpFluid
                  }
            }
        },
        myportfolio: file(relativePath: {eq: "myportfolio_screenshot.png"}) {
            childImageSharp{
              fluid( maxWidth: 450, quality: 100)
                  {
                    ...GatsbyImageSharpFluid
                  }
            }
        },
        instanturlsender: file(relativePath: {eq: "instanturlsender_screenshot.png"}) {
          childImageSharp{
            fluid( maxWidth: 450, quality: 100)
                {
                  ...GatsbyImageSharpFluid
                }
          }
      }
    }
`

export default MyWorks;
