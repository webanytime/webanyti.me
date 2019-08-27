import React from "react"
import { Flex, Box, Heading, Button } from "rebass"
import styled from "styled-components"

const ContactForm = ({
  className,
  children,
  py,
}: {
  className?: any
  children: string
  py: number
}) => (
  <Flex py={py}>
    <Box flex={1} mr={3}>
      <Flex flexDirection="column">
        <Heading fontSize={4} pb={3}>
          {children}
        </Heading>
        <Box flex={1} py={3}>
          <input
            className={className}
            id="name"
            type="text"
            placeholder="Full Name"
          />
        </Box>
        <Box flex={1} py={3}>
          <input
            className={className}
            id="email"
            type="email"
            placeholder="email@email.com"
          />
        </Box>
        <Box flex={1} py={3}>
          <Button
            bg="grey"
            fontSize={4}
            css={{
              width: "100%",
            }}
          >
            Send us an email
          </Button>
        </Box>
      </Flex>
    </Box>
    <Box flex={1}>This is where a map should go</Box>
  </Flex>
)

export default styled(ContactForm)`
  border: 0;
  background-color: #393e46;
  padding: 15px 25px;
  font-size: 22px;
  color: white;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
`
