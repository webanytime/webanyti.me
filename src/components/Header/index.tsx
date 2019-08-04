import React from "react"
import { Heading, Box } from "rebass"
import Logo from "../Logo"
import Link from "../Link"

const Header = () => (
  <Box p={20}>
    <Link to={"/"} removeUnderline>
      <Logo />
      <Heading textAlign="center" fontSize={4}>
        web architecture and development solutions
      </Heading>
    </Link>
  </Box>
)

export default Header
