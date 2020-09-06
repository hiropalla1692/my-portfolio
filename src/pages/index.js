import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import TitleBox from "../components/titlebox"
import MyWorks from "../components/myworks"
import styled from 'styled-components'


const StyledImg = styled(Img)`
  border-radius: 50% !important;
  margin-bottom: 0 !important;
  border: solid 2px;
  border-color: white;
`
const Billboard= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 650px;
  @media screen and (max-width:480px) {
    height: 350px;
  }
  p {
    color: #3e3047;
    font-size: 1.7em;
    font-family: 'Montserrat', sans-serif;
    top: 50%;
    left: 50%;
    margin:0;
    padding:0;
    @media screen and (max-width:768px) {
    font-size: 1.2em;
    }
    @media screen and (max-width:480px) {
    font-size: 0.9em;
    }
  }
`

const BillboardEmoji= styled.div`
  font-size: 120px;
  color: white;
  margin: 0 5%;
  @media screen and (max-width:768px) {
    font-size: 80px;
  }
  @media screen and (max-width:480px) {
      font-size: 50px;
  }
`

const Wrapper= styled.div`
  display: flex;
  align-items: top;
  padding: 30px 240px;
  @media screen and (max-width:1024px) {
    flex-direction: column;
    padding: 8px 40px;
  }
`

const ProfileTextBox= styled.div`
  padding: 15px 45px;
  color: #3e3047;
  a {
      color: #3e3047;
      text-decoration: none;
      &:hover {
        color: white;
      }
  }
  @media screen and (max-width:768px) {
    padding: 5px 15px;
    }
  @media screen and (max-width:480px) {
    p {
      font-size: 14px;
    }
  }
`
const emojis = ["🥑","🛒","🎸","💅", "🦱", "🎧", "🦠"];
const randomNo = Math.floor( Math.random() * emojis.length);

const showOnScroll = () => {
    console.log("hello");
}

export default () => (
  <StaticQuery
        query={query}
        render={ data => (
            <Layout> 
              <div id='root'>
                <Billboard>
                  <div><p>MY PORTFOLIO</p><p style={{color: 'white'}}>MY PORTFOLIO</p><p>MY PORTFOLIO</p></div>
                  <BillboardEmoji>{`{ ${emojis[randomNo]} }`}</BillboardEmoji>
                </Billboard>
                <TitleBox title="WHO&nbsp;&nbsp;I&nbsp;&nbsp;AM"/>
                <Wrapper onScroll={showOnScroll()}>
                  <div>
                    <StyledImg fixed={data.face.childImageSharp.fixed} />
                  </div>
                  <ProfileTextBox>
                    <h3 style={{color: '#3e3047'}}>Hirokuni Honda</h3>
                    <h4 style={{color: '#3e3047'}}>What I did</h4>
                    <p>慶應義塾大学経済学部卒業後、物流企業にて貿易に関わる営業・現場運営を5年間担当。
                      プログラミングを始めたきっかけは、好きな音楽の歌詞から自分だけの英単語帳を作ってみたくなったため。2019年からRuby on RailsやJavaScriptの学習を開始。
                      開発を進める過程で、使いやすさや視覚的な部分へのこだわりが強いと自覚し、React.js等のフロントエンドに注力。
                      アイデアやこだわりをダイレクトに表現できて、世界中の人々(ユーザー)と共有することができるエンジニアという職業に惹かれるようになった。
                    </p>
                    <h4 style={{color: '#3e3047'}}>What I can do now</h4>
                    <p>
                      - HTML / CSS<br></br>
                      - Javascript<br></br>
                      - Typescript<br></br>
                      - Ruby / Ruby on Rails<br></br>
                      - React.js<br></br>
                      - English (<a target="_blank" href="http://cadillacs-in-our-dreams.surge.sh/"><strong>映画レビューblog</strong></a>をたまに書いてます。)<br></br>
                    </p>
                    <h4 style={{color: '#3e3047'}}>What now I try</h4>
                    <p>
                      - Redux<br></br>
                      - AWS<br></br>
                    </p>
                    <h4 style={{color: '#3e3047'}}>What I've been into </h4>
                    <p>
                      - レコード🎧収集<br></br>
                      - <a target="_blank" href="https://anchor.fm/eazymoney">米国株のPodcast配信🎙</a><br></br>
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
        }
    }
`