import React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const ArticleIndex = styled.div`
  margin: 4em 12em;
  padding: 2em 4em;
  background-color: white;
  font-family: 'Source Sans Pro';
    h1, h2, h3, h4{
      font-family: 'Source Serif Pro';
    }
    p {
      color: gray;
      margin-top: 9px;
      margin-bottom: 54px;
    }
  
  @media screen and (max-width:768px) {
    margin: 2em 4em;
    padding: 1em 2em;
  }
  @media screen and (max-width:432px) {
    margin: 2em 0em;
    padding: 1em 1em;
    font-size: 15px;
    h1, h2, h3, h4{
      font-size: 20px;
    }
  }
`

const ArticleTitle = styled.div`
  border-left: solid 4px;
  border-color: olive;
  h3 {
    margin: 0 0 0 0;
  }
`

export default ({ data }) => {
  console.log(data)
  return (
    <ArticleIndex>
      <h1>Cadillacs In Our Dreams </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <ArticleTitle>
                  <h3>
                    &nbsp;&nbsp;{node.frontmatter.title}{" "}
                    <span>
                      — {node.frontmatter.date}
                    </span>
                  </h3>
                </ArticleTitle>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
    </ArticleIndex>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`