import React, { ReactNode } from "react"
import { Heading } from "rebass"
import styled from "styled-components"

const BigText = ({
  className,
  children,
  py,
}: {
  className?: any
  children: ReactNode
  py: number
}) => (
  <Heading
    className={className}
    fontSize={5}
    m={0}
    fontWeight="lighter"
    lineHeight={1.8}
    fontFamily="mono"
    py={py}
  >
    {children}
  </Heading>
)

export default styled(BigText)`
  > strong {
    background-color: #393e46;
    padding: 5px 10px;
  }
`
