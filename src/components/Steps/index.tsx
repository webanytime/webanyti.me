import React from "react"
import { Flex, Box, Heading, Text } from "rebass"

const Steps = ({ children, py }: { children: any; py: number }) => (
  <Flex flexDirection="row" py={py}>
    {children.split(".").map(
      (child, index) =>
        child && (
          <Box
            key={child}
            flex={1}
            px={3}
            py={4}
            ml={index > 0 ? 3 : 0}
            bg="white"
          >
            <Heading fontSize={7} color="grey">{`${index + 1}`}</Heading>
            <Text color="grey">{child}</Text>
          </Box>
        )
    )}
  </Flex>
)

export default Steps
