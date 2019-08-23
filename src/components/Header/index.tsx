import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Flex, Box } from "rebass"
import Logo from "../Logo"
import Link from "../Link"

const Header = () => (
  <StaticQuery
    query={graphql`
      query AllPagesQuery {
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
    `}
    render={({ allMdx: { edges: routes } }) => (
      <Flex alignItems="center">
        <Box
          css={{
            flex: 1,
          }}
        >
          <Link to={"/"} removeUnderline>
            <Logo />
          </Link>
        </Box>
        {routes.map(edge => {
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
      </Flex>
    )}
  />
)

export default Header
