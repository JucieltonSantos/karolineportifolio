// @mui
import { createTheme } from '@mui/material/styles';
// common theme options
import commonThemeOptions from 'styles/theme/commonThemeOptions';

const { components: commonComponentsOptions } = commonThemeOptions;

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFD700",
      light: "#FF826B",
      dark: "#B24531",
      contrastText: "#8B4513",
    },
    secondary: {
      main: "#2196F3",
      light: "#4DABF5",
      dark: "#1769AA",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#8B4513",
      light: "#FFFFFF",
      dark: "#B2B2B2",
      contrastText: "#F5E6D3",
    },
    background: {
      default: "#F5E6D3",
      paper: "#fff",
    },
    text: {
      primary: "#8B4513",
      secondary: "#383838",
      disabled: "#777777",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: "#383838",
        },
      },
    },
    ...commonComponentsOptions,
  },
});

export default lightTheme;
