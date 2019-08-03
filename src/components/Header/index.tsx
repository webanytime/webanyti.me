import React from "react"
import { Heading } from "rebass"
import Logo from "../Logo"
import Link from "../Link"

const Header = () => (
  <Link to={"/"} removeUnderline>
    <Logo />
    <Heading textAlign="center" fontSize={3}>
      web architecture and development solutions
    </Heading>
  </Link>
)

export default Header
