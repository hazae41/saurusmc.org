import React, { useState, useEffect } from 'react';

import { Avatar, Box, createMuiTheme, CssBaseline, ThemeProvider, Tooltip } from "@material-ui/core"
import { Dark, Light } from './Themes';

import { Home } from './Home';

export const App = () => {

  return (
    <ThemeProvider theme={Light}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}
