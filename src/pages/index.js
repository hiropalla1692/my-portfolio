import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import TitleBox from "../components/titlebox"
import MyWorks from "../components/myworks"
import ModalWindow from "../components/modalwindow"
import styled from 'styled-components'


const StyledImg = styled(Img)`
  border-radius: 50% !important;
  margin-bottom: 0 !important;
  border: solid 2px;
  border-color: white;
`
const Billboard= styled.div`
  position: relative;
  p {
    position: absolute;
    color: rebeccapurple;
    font-size: 1.5em;
    font-family: 'Montserrat', sans-serif;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin:0;
    padding:0;

    @media screen and (max-width:480px) {
    font-size: 1em;
    }
  }
`

const Wrapper= styled.div`
  display: flex;
  align-items: top;
  background-color: #fff1ff;
  padding: 30px 240px;

  @media screen and (max-width:1024px) {
    flex-direction: column;
    padding: 8px 40px;
    }
`

const ProfileTextBox= styled.div`
  padding: 15px 45px;

  @media screen and (max-width:768px) {
    padding: 5px 15px;
    }
    @media screen and (max-width:480px) {
      p {
        font-size: 12px;
      }
    }
`

export default () => (
  <StaticQuery
        query={query}
        render={ data => (
            <Layout> 
              <div id='root'>
                <Billboard>
                  <Img fluid={data.background.childImageSharp.fluid} style={{ maxHeight: 0.75*data.background.childImageSharp.fluid.presentationHeight}}/>
                  <p>THANK YOU<br></br>FOR VISITING MY PORTFOLIO</p>
                </Billboard>
                <TitleBox title="WHO&nbsp;&nbsp;I&nbsp;&nbsp;AM"/>
                <Wrapper>
                  <div>
                    <StyledImg fixed={data.face.childImageSharp.fixed} />
                  </div>
                  <ProfileTextBox>
                    <h3>Hirokuni Honda</h3>
                    <h4 style={{color: '#616161'}}>What I did</h4>
                    <p>慶應義塾大学経済学部卒業後、物流企業にて貿易に関わる営業・現場運営を5年間担当。
                      好きな楽曲から自分だけの英単語帳を作ってみたいと思い、2019年からRuby on RailsやJavaScriptの学習を開始。
                      開発を進める過程で、使いやすさや視覚的な部分へのこだわりが強いと自覚し、React.js等のフロントエンドに注力。
                      自分のアイデアやこだわりをダイレクトに表現できて、世界中の人々(ユーザー)と共有することができるエンジニアという職業に惹かれるようになり転職を決意した。
                    </p>
                    <h4 style={{color: '#616161'}}>What I can do now</h4>
                    <p>
                      - HTML / CSS<br></br>
                      - Javascript<br></br>
                      - Ruby (基礎)<br></br>
                      - React.js<br></br>
                      - English (<a href="http://cadillacs-in-our-dreams.surge.sh/"><strong>映画レビューblog</strong></a>をたまに書いてます。)<br></br>
                    </p>
                    <h4 style={{color: '#616161'}}>What I will do</h4>
                    <p>
                      - Redux<br></br>
                      - Typescript<br></br>
                    </p>
                    <h4 style={{color: '#616161'}}>What I've been into </h4>
                    <p>
                      - 洋書📗を頑張って読む<br></br>
                      - 塩胡椒で適当にドレッシング🥗を自作する<br></br>
                      - シャンパン🍾に詳しくなる<br></br>
                    </p>
                  </ProfileTextBox>
                </Wrapper>
                <TitleBox title="MY&nbsp;&nbsp;WORKS"/>
                <MyWorks/>
              </div>
            </Layout>
        )}
    />
)

const query = graphql`
    query {
        face: file(relativePath: {eq: "profile.jpg"}) {
            childImageSharp{
                fixed(width: 150, quality: 100)
                  {
                    ...GatsbyImageSharpFixed
                  }
            }
        },
        background: file(relativePath: {eq: "newyork.jpg"}) {
          childImageSharp{
            fluid( maxWidth: 1280, quality: 100, grayscale: true)
                {
                  ...GatsbyImageSharpFluid
                  presentationHeight
                }
          }
      }
    }
`