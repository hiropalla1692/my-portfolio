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
          <h1>COVID-19 Visualizer 🦠</h1>
          <Img fluid={data.covid_19.childImageSharp.fluid} />
        </Block>
        <Block>
          <Styledh4>サービスURL：</Styledh4>
            <a herf="http://covid-19-visualizer.surge.sh/">COVID-19 Visualizer 🦠</a>
          <Styledh4>使用技術：</Styledh4>
          <p>React Hooks / Typescript / Material UI / HTML / CSS</p>
          <Styledh4>詳細：</Styledh4>
          <p>APIから世界188カ国のコロナウイルス感染者データを入手し、①世界総患者数を線グラフ化、②各国の患者数を棒グラフ化し、視覚的な情報に変換して表示させた。</p>
          <Styledh4>こだわった点、苦労した点：</Styledh4>
          <p>
            ・初めてTypescriptを使用。一般的な型定義(stringなど)やReact特有の型定義(propsやcomponentなど)の記述について学習ができた。<br></br>
            <br></br>
            ・Material UIを利用して、短時間で最低限見栄えの良いレスポンシブデザインを作ることを意識した。<br></br>
            <br></br>
            ・これまでAPIから取得したデータをローカルの変数に落とし込む時、データの型を誤って取扱い、エラーが発生しがちであった。TypescriptではVSCode上で実行エラーがすぐに確認することができて、Typescriptのメリットを体感することができた。
          </p>
          <Link to="/"><Button>>>> Back</Button></Link>
          <Button><a target="_blank" href="https://github.com/hiropalla1692/covid-19-checker">>>> Go to Gitgub</a></Button>
        </Block>
      </Container>
    </Layout>
    )}
    />
  )
};

const query = graphql`
    query {
        covid_19: file(relativePath: {eq: "covid_19_screenshot.png"}) {
          childImageSharp{
            fluid( maxWidth: 850, quality: 100)
                {
                  ...GatsbyImageSharpFluid
                }
          }
      }
    }
`
