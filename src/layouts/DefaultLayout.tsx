import MDXRenderer from "gatsby-mdx/mdx-renderer"
import React from "react"
import { Box, Flex, Heading } from "rebass"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function DocsLayout(props) {
  const {
    data: {
      mdx: {
        code,
        frontmatter: { title },
      },
    },
  } = props

  return (
    <>
      <Header />
      <Flex alignItems="center">
        <Box
          width={3 / 4}
          css={{
            margin: "0 auto",
            paddingTop: 30,
          }}
        >
          <Heading>{title}</Heading>
          <MDXRenderer>{code.body}</MDXRenderer>
        </Box>
      </Flex>
      <Footer />
    </>
  )
}

/**
 * Query for data for the page. Note that $id is injected in via context from
 * actions.createPage. See gatsby-node.js for more info.
 */
export const pageQuery = graphql`
  query DocsLayoutQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`
