/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./Header"

const Root = styled.div`
  overflow: hidden;
`

const Body = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
`

interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Root>
      <Header siteTitle={data.site?.siteMetadata?.title} />
      <Body>{children}</Body>
    </Root>
  )
}

export default Layout
