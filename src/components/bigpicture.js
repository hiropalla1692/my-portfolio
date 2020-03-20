import React from "react"
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


export default () => (
  <StaticQuery
        query={query}
        render={ data => (
          <Img style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }}
          sizes={data.background.childImageSharp.sizes} />
        )}
  />
)


const query = graphql`
    query {
        background: file(relativePath: {eq: "centralpark.jpg"}) {
            childImageSharp{
                sizes(maxWidth: 1240, quality: 100, grayscale: true){
                    ...GatsbyImageSharpSizes
                  }
            }
        }
    }
`