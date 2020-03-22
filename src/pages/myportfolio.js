
import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Container = styled.div`
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #fff1ff;
`
const Block = styled.div`
  margin: 3em 15em;
  @media screen and (max-width:960px) {
    margin: 3em 6em;
    font-size: 16px;
  }
  @media screen and (max-width:480px) {
    margin: 3em 3em;
    font-size: 12px;
  }
`
const Styledh4 = styled.h4`
  margin: 2em 0 0.5em 0;
  color: '#616161';
`
const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 12rem;
  background: black;
  color: white;
  border: 2px solid white;
  &:hover {
    background-color: gray;
    color: white;
    }
  @media screen and (max-width:480px) {
  font-size: 9px;
  width: 7rem;
  }
  a {
      color: white;
      text-decoration: none;
      &:hover {
        color: white;
      }
    }
`

export default () => {
  return (
    <StaticQuery
    query={query}
    render={ data => (
      <Layout>
      <Container>
        <Block>
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Portfolio☕️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <Img fluid={data.myportfolio.childImageSharp.fluid} />
        </Block>
        <Block>
          <Styledh4>使用技術：</Styledh4>
          <p>Gatsby.js / GraphQL / React / Javascript / HTML / CSS</p>
          <Styledh4>詳細：</Styledh4>
          <p>
            現在閲覧されている静的なサイト。<br></br>
            Gatsby.jsとGraphQLを使用し、画像描写はgatsby-imageを利用している。surge.shでデプロイを行った。
          </p>
          <Styledh4>こだわった点、苦労した点：</Styledh4>
          <p>
            静的サイト作成にあたり、Reactとの相性が良さそうであったのでGatsby.jsを採用した。<br></br>
            見た目の部分では、Vocamyアプリ作成時に怠っていたレスポンシブ対応に取り組んだ。<br></br>
            また、公式ドキュメントを参考にしてgatsby-imageのfixed,fluid形式で自分が描写したいように画像情報をGraphQLからqueryすることはできるようになった。<br></br>
            しかしながら、GraphQLの理解は十分で無いため、引き続き学習を続けていきたい。<br></br>
          </p>
          <Link to="/"><Button>>>> Back</Button></Link>
          <Button><a href="https://github.com/hiropalla1692/my-portfolio">>>> Go to Gitgub</a></Button>
        </Block>
      </Container>
    </Layout>
    )}
    />
  )
};

const query = graphql`
    query {
        myportfolio: file(relativePath: {eq: "myportfolio_screenshot.png"}) {
          childImageSharp{
            fluid( maxWidth: 850, quality: 100)
                {
                  ...GatsbyImageSharpFluid
                }
          }
      }
    }
`

