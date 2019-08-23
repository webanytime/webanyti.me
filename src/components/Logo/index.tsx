import React from "react"
import styled from "styled-components"
import { theme } from "../../Theme"

const Logo = ({ className }: { className?: any }) => (
  <h1 className={className}>⠺⠑⠃webanytime</h1>
)

export default styled(Logo)`
  font-size: ${theme.fontSizes[6]}px;
  margin: 0;
`
