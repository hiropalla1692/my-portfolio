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
          <h1>Instant URL Sender📩</h1>
          <Img fluid={data.instanturlsender.childImageSharp.fluid} />
        </Block>
        <Block>
          <Styledh4>使用技術：</Styledh4>
          <p>React Hooks / Javascript / HTML / CSS</p>
          <Styledh4>詳細：</Styledh4>
          <p>PCで現在開いているURLをワンクリックでスマホに送信できるChrome拡張機能。各種情報の送信にはTwilio APIのSMS機能を利用。</p>
          <Styledh4>こだわった点、苦労した点：</Styledh4>
          <p>
            ・初めてHooksを導入。useState,useEffectの基本的な機能・コードの書き方を理解し、シンプルなカスタムHookも作ることもできた。<br></br>
            <br></br>
            ・HTTPリクエスト周辺について理解が曖昧な部分が多かったため、Promiseオブジェクトついて再度学習し、そこから派生したfetch apiやasync/awaitを使ったajax通信について理解を深めた。(結果的にごくごくシンプルなfetchしか使用していないが。。)<br></br>
            <br></br>
            ・ブラウザの拡張機能開発自体が初めてであったため、Chrome Extensionのファイル構成やChrome APIについても一定の知識をつけることができた。<br></br>
            <br></br>
            ・完成物がシンプルなので、今後はTypescriptを導入してコードを書き換えてみたいと思う。<br></br>
          </p>
          <Link to="/"><Button>>>> Back</Button></Link>
          <Button><a target="_blank" href="https://github.com/hiropalla1692/cadillacs-in-our-dreams">>>> Go to Gitgub</a></Button>
        </Block>
      </Container>
    </Layout>
    )}
    />
  )
};

const query = graphql`
    query {
        instanturlsender: file(relativePath: {eq: "instanturlsender_screenshot.png"}) {
          childImageSharp{
            fluid( maxWidth: 850, quality: 100)
                {
                  ...GatsbyImageSharpFluid
                }
          }
      }
    }
`

