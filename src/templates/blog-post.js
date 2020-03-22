import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from 'styled-components'

const ArticleDisplay = styled.div`
  margin: 4em 12em;
  padding: 2em 4em;
  background-color: white;
  font-family: 'Source Sans Pro';
    h1, h2, h3, h4{
      font-family: 'Source Serif Pro';
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
export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <ArticleDisplay>
        <Link to='/blog'><h3>Cadillacs In Our Dreams</h3></Link>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </ArticleDisplay>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`