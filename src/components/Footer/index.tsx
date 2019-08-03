import React from "react"
import styled from "styled-components"
import { theme } from "../../Theme"
import { Box, Text } from "rebass"

const Footer = () => (
  <Box
    css={{
      position: "fixed",
      bottom: 0,
    }}
    bg="black"
    width="100%"
    p={20}
  >
    <Text fontSize={0} textAlign="center">
      webanytime limited | registered in england 🇬🇧 | company number: 12131488
    </Text>
    <Text fontSize={0} textAlign="center">
      office: 1st floor, telecom house, 125-135 preston road, brighton, east
      sussex, uk, bn16af
    </Text>
  </Box>
)

export default styled(Footer)`
  color: ${theme.colors.white};
`
