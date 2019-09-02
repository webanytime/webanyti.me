// @ts-check
import React, { Fragment } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { Button, Flex, Box } from "rebass"
import BigText from "./components/BigText"
import Slides from "./components/Slides"
import Steps from "./components/Steps"
import ContactForm from "./components/ContactForm"

export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48],
  colors: {
    black: "#222831",
    grey: "#393e46",
    blue: "#00C6CF",
    white: "#EEEEEE",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }

  html, body {
    font-family: "system";
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    margin: 0;
  }

  a[href]:not([class]) {
    color: ${theme.colors.blue};
    text-decoration: underline;
  }
`

export const LayoutComponents = {
  h1: styled.h1`
    font-size: 20px;
  `,
  p: styled.p`
    font-size: 16px;
  `,
}

export const UIComponents = {
  Button: props => <Button {...props}>{props.children}</Button>,
  Flex: props => <Flex {...props}>{props.children}</Flex>,
  Box: props => <Box {...props}>{props.children}</Box>,
  BigText: props => <BigText {...props}>{props.children}</BigText>,
  Slides: props => <Slides {...props}>{props.children}</Slides>,
  Steps: props => <Steps {...props}>{props.children}</Steps>,
  ContactForm: props => <ContactForm {...props}>{props.children}</ContactForm>,
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  </ThemeProvider>
)
