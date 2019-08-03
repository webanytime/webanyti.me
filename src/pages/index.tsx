import { graphql } from "gatsby"
import { Heading, Flex, Box } from "rebass"
import Logo from "../components/Logo"
import Link from "../components/Link"

import React from "react"

const home = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <Box>
    <Logo />
    <Heading textAlign="center" fontSize={3} lineHeight={"50px"}>
      web architecture and development solutions
    </Heading>
    <Flex>
      {edges.map(edge => {
        const {
          node: {
            fields: { route },
            frontmatter: { title },
          },
        } = edge

        return (
          <Box key={route} width={1 / edges.length}>
            <Link to={route}>{title}</Link>
          </Box>
        )
      })}
    </Flex>
  </Box>
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
