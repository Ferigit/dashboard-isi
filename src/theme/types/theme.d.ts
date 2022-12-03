/* eslint-disable import/named */
import { Color } from '@mui/material'
import {
  SimplePaletteColorOptions,
  Theme,
  ThemeOptions,
} from '@mui/material/styles'

declare interface ITheme extends Omit<Theme, 'palette' | 'breakpoints'> {
  palette: IPalette
  breakpoints: Breakpoints
  variables: any
}

declare interface IThemeOptions
  extends Omit<ThemeOptions, 'palette' | 'breakpoints'> {
  palette: IPalette
  breakpoints: BreakpointsOptions
  // typography: TypographyOptions
}

declare interface IPalette {
  primary: DefaultPalette
  secondary: DefaultPalette
  neutral: DefaultPalette
  grayIcon: any
  gray: any
  red: any
  disable: any
  disable2: any
  white: any
  placeholder: any
  text: any
  lines: any
  link: any
  secondaryText: any
  dark: any
  error: any
  warning: any
  success: any
  BG: any
  BGLight: any
  BGPrimaryLight: any
  yellow: any
  active: any
  colorLoadingOne: any
  colorLoadingTwo: any
  colorLoadingThree: any
  colorLoadingFour: any
}

declare type DefaultPalette = SimplePaletteColorOptions &
  Omit<Color, 'A100' | 'A200' | 'A400' | 'A700'>
