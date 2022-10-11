import {createTheme} from '@shopify/restyle';
import palette from './palette';

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
  },
  spacing: {
    s: 10,
    m: 16,
    l: 24,
  },
  borderRadii: {
    s: 10,
    m: 16,
    l: 24,
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export default theme;
