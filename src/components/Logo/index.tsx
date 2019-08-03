import React from "react"
import styled from "styled-components"
import { theme } from "../../Theme"

const Logo = ({ className }: { className?: any }) => (
  <h1 className={className}>
    ⠺⠢⠃
    <br />
    webanytime
  </h1>
)

export default styled(Logo)`
  text-align: center;
  font-size: ${theme.fontSizes[5]}px;
  line-height: 22px;
  margin-bottom: 0;
`
