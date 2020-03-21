
import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #fff1ff;
`
const Block = styled.div`
  margin: 3em 3em;
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
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vocamy🥑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <Img fluid={data.vocamy.childImageSharp.fluid} />
        </Block>
        <Block>
          <Styledh4>使用技術：</Styledh4>
          <p>Ruby on Rails / React / Javascript / HTML / CSS</p>
          <Styledh4>詳細：</Styledh4>
          <p>気になる曲のリリックから簡単に自分だけの単語帳を作ることができるアプリケーション。曲名の検索やリリック表示にはMusixmatch APIを利用。<br></br>
            使い方は簡単。<br></br>
            <strong>❶曲名を検索し、お目当ての曲を選択するとリリックが表示される。</strong><br></br>
            <strong>❷リリック内の覚えたい1単語をクリックし、日本語訳を入力して登録完了。</strong><br></br>
            <strong>たったの2ステップ！</strong><br></br>
            単語を覚えやすくする工夫として、登録した単語からアーティスト名・曲名・その単語が使われている一説が参照できるようにした。<br></br>
          </p>
          <Styledh4>こだわった点、苦労した点：</Styledh4>
          <p>JavascriptやReactを独習しながら初めて作ったアプリケーションで、作成しながら基礎を身につけることができたと思う。<br></br>
            具体的にはpropsとstateの概念、React-Router, Context, CSS-in-JSとしてstyled-componentsの使い方を学習した。<br></br>
            axiosを使った外部APIへのアクセスや、APIから入手したリリックのJSONファイルを正しく画面に整理して表示させることに少し苦労したが、そのおかげでjavascriptの基本的な型や操作の勉強になった。<br></br>
            もともと自分自身が使ってみたい！という衝動から見切り発車に開発をスタートしたため、包括的な使用技術について考えていなかった。<br></br>
            今後は利用頻度が高そうな下記技術を追加し、改良を続けていきたい。<br></br>
            ・Reduxの利用 (現状component間の伝達が多く、不恰好な形になっている。)<br></br>
            ・hooksの利用<br></br>
            ・Typescriptの利用<br></br>
          </p>
          <Link to="/"><Button>>>> Back</Button></Link>
          <Button><a href="https://github.com/hiropalla1692/vocamy">>>> Go to Gitgub</a></Button>
        </Block>
      </Container>
    </Layout>
    )}
    />
  )
};

const query = graphql`
    query {
        vocamy: file(relativePath: {eq: "vocamy_screenshot.png"}) {
          childImageSharp{
            fluid( maxWidth: 450, quality: 100)
                {
                  ...GatsbyImageSharpFluid
                }
          }
      }
    }
`
