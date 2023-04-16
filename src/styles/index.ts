import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      purple500: '#7695EC',
      purple700: '#5473CA',
      green500: '#47B960',
      red500: '#FF5151',
      gray300: '#777777',
      gray400: '#999999',
      gray500: '#CCCCCC',
      gray700: '#CCCCCC',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontSizes: {
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.375rem', // 22px
    },
  },
})
