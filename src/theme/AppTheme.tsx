import { CssBaseline, ThemeProvider } from "@mui/material";

import { purpleTheme } from "./purpleTheme";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AppTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
