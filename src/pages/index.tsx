import React from "react"
import { graphql } from "gatsby"
import { Box } from "rebass"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = ({ data: { home } }) => (
  <Box p={5}>
    <Header />
    <Box>
      <MDXRenderer>{home.edges[0].node.code.body}</MDXRenderer>
    </Box>
    <Footer />
  </Box>
)

export const pageQuery = graphql`
  {
    home: allMdx(filter: { frontmatter: { type: { eq: "home" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          code {
            body
          }
        }
      }
    }
  }
`

export default Home
