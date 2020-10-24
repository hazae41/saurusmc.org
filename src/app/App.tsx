import React, { useState, useEffect } from 'react';

import { Avatar, Box, createMuiTheme, CssBaseline, ThemeProvider, Tooltip } from "@material-ui/core"
import { Dark, Light } from './Themes';

import { Home } from './Home';
import { BoldTypo } from './Material';

export const App = () => {

  return (
    <ThemeProvider theme={Light}>
      <CssBaseline />
      <Home />
      <Presentation />
    </ThemeProvider>
  )
}

export const Presentation = () => {
  return (
    <Box
      height="90vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <BoldTypo
        variant="h3"
        children="Coming soon!" />
    </Box>
  )
}
