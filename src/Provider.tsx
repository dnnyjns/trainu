import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "~/style/global"
import theme from "~/style/theme"

type CustomTheme = typeof theme
declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}

interface ProviderProps {
  children: React.ReactNode
}
const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Provider
