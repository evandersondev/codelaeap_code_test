import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'html, body': {
    height: '100vh',
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$gray700',
    color: '$black',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },
})
