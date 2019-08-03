import { graphql } from "gatsby"
import { Box } from "rebass"
import Header from "../components/Header"
import Link from "../components/Link"
import Footer from "../components/Footer"

import React from "react"

const home = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <>
    <Box
      css={{
        paddingTop: "30vh",
      }}
    >
      <Header />
      <Box
        css={{
          paddingTop: "20px",
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
  </>
)

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

export default home
