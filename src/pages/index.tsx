import { graphql } from "gatsby"
import { Heading, Box } from "rebass"
import Link from "../components/Link"

import React from "react"

const home = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <Box>
    <Heading textAlign="center" fontSize={5}>
      ⠺⠢⠃ webanytime
    </Heading>
    <Heading textAlign="center" fontSize={3}>
      web architecture and development solutions
    </Heading>
    <div>
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
    </div>
  </Box>
)

export const pageQuery = graphql`
  query PagesQuery {
    allMdx {
      edges {
        node {
          fields {
            route
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default home
