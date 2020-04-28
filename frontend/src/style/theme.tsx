import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { blue, grey, purple } from '@ant-design/colors'

const theme: DefaultTheme = {
  colors: {
    primary: blue.primary,
    primaryAll: blue,
    secondary: purple.primary,
    secondaryAll: purple,
    neutral: grey.primary,
    neutralAll: grey,
    black: '#000000',
    white: '#ffffff',
  },
}

type ThemeProps = {
  children: React.ReactNode
}

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
