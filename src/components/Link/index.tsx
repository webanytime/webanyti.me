import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import { Box } from "rebass"
import { theme } from "../../Theme"

const Link = ({
  to,
  children,
  className,
}: {
  to: string
  children: string
  className?: any
}) => (
  <Box color="white">
    <GatsbyLink to={to} className={className}>
      {children}
    </GatsbyLink>
  </Box>
)

export default styled(Link)`
  color: ${theme.colors.white};
`
