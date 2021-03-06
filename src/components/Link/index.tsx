import React, { ReactNode } from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import { theme } from "../../Theme"

const Link = ({
  to,
  children,
  className,
}: {
  to: string
  children: ReactNode
  className?: any
  removeUnderline?: boolean
}) => (
  <GatsbyLink to={to} className={className}>
    {children}
  </GatsbyLink>
)

export default styled(Link)`
  color: ${theme.colors.white};
  text-decoration: ${p => (p.removeUnderline ? "none" : "underline")};
`
