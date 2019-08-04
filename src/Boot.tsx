import { MDXProvider } from "@mdx-js/tag"
import React from "react"
import { Provider as StateProvider } from "unstated"
import { LayoutComponents, Theme } from "./Theme"
import { Helmet } from "react-helmet"
// TODO: Need to create gatsby-plugin-react-head
// import { HeadProvider } from "react-head"

const title = "Webanytime Limited"
const description =
  "webanytime provides web architecture and development solutions"

export const Boot: React.SFC<{ element: any }> = ({ element }) => {
  return (
    <StateProvider>
      <MDXProvider components={LayoutComponents}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="og:url" content={"https://webanyti.me"} />
          <meta name="og:image" content="http://webanyti.me/favicon.ico" />
          <meta name="og:description" content={description} />
        </Helmet>
        <Theme>{element}</Theme>
      </MDXProvider>
    </StateProvider>
  )
}
