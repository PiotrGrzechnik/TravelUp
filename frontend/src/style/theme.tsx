import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { blue, grey } from '@ant-design/colors'

const theme: DefaultTheme = {
  colors: {
    primary: blue.primary,
    primaryAll: blue,
    secondary: 'magenta',
    neutral: grey.primary,
    neutralAll: grey,
  },
}

type ThemeProps = {
  children: React.ReactNode
}

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
