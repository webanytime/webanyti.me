import React, { ReactNode } from "react"
import styled from "styled-components"

const BigText = ({
  className,
  children,
}: {
  className?: any
  children: ReactNode
}) => <h3 className={className}>{children}</h3>

export default styled(BigText)`
  font-size: 24px;
  margin: 0;
  font-weight: lighter;
  line-height: 40px;
  font-family: mono;
  font-style: italic;

  > strong {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5px 10px;
  }
`
