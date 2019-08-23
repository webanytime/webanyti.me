import React from "react"
import { Flex, Box } from "rebass"

const Slides = ({
  className,
  children,
}: {
  className?: any
  children: any
}) => (
  <Flex
    css={{
      height: `${Object.keys(children).length * 50}vh`,
    }}
    flexDirection="column"
    alignItems="center"
    className={className}
  >
    {children.map(child => (
      <Box
        css={{
          flex: 1,
        }}
        key={child}
      >
        <Flex
          justifyContent="center"
          flexDirection="column"
          css={{
            height: "100%",
          }}
        >
          {child}
        </Flex>
      </Box>
    ))}
  </Flex>
)

export default Slides
