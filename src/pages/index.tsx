import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Box } from "rebass"
import Header from "../components/Header"
import Link from "../components/Link"
import Footer from "../components/Footer"

const Home = props => {
  const [opacity, setOpacity] = useState<number>(0)
  useEffect(() => {
    setOpacity(100)
  })
  const {
    data: {
      allMdx: { edges },
    },
  } = props
  return (
    <Box
      css={{
        transition: "all 1.5s ease",
        opacity,
      }}
    >
      <Box
        css={{
          paddingTop: "30vh",
        }}
      >
        <Header />
        <Box
          css={{
            textAlign: "center",
          }}
        >
          {edges.map(edge => {
            const {
              node: {
                fields: { route },
                frontmatter: { title },
              },
            } = edge
            return (
              <Link key={route} to={route}>
                {title}
              </Link>
            )
          })}
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export const pageQuery = graphql`
  query PagesQuery {
    allMdx(filter: { frontmatter: { type: { eq: "page" } } }) {
      edges {
        node {
          parent {
            id
          }
          fields {
            route
          }
          frontmatter {
            title
            type
          }
        }
      }
    }
  }
`

export default Home
