import React, { useState, useEffect, useCallback } from 'react';

import { Avatar, Box, Button, createMuiTheme, CssBaseline, ThemeProvider, Tooltip, useMediaQuery, useTheme } from "@material-ui/core"
import { Dark, Light } from './Themes';

import { Home } from './Home';
import { BoldTypo, FlatFab } from './Material';
import { useTyper } from './Typer';

export const App = () => {

  return (
    <ThemeProvider theme={Light}>
      <CssBaseline />
      <Home />
      <Presentation />
    </ThemeProvider>
  )
}


export const Text1 = `
player.on(["death"], () => {
  console.log("Player is dead!")
})
`

export const Presentation = () => {
  const { breakpoints } = useTheme();
  const sm = useMediaQuery(breakpoints.down('sm'));
  const text = useTyper(Text1)

  return (
    <Box
      height="90vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <BoldTypo
        variant={sm ? "h4" : "h2"}
        children="Create plugins, fast." />
      <Box
        height="30vh"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <BoldTypo
          variant={sm ? "h5" : "h3"}
          children={<pre children={text} />} />
      </Box>
      <a target="_blank"
        href="https://github.com/saurusmc/create-saurus-plugin">
        <FlatFab
          color="primary"
          variant="extended"
          children={<BoldTypo children="Learn more" />} />
      </a>
    </Box>
  )
}
