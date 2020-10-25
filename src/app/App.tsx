import React, { useState, useEffect, useCallback } from 'react';

import { Avatar, Box, Button, createMuiTheme, CssBaseline, Fab, ThemeProvider, Tooltip, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { Dark, Light } from './Themes';

import { Home } from './Home';
import { BoldTypo } from './Material';
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
      alignItems="center"
      padding={2}>
      <BoldTypo
        variant={sm ? "h4" : "h2"}
        children="Create plugins, fast." />
      <Typography
        variant={sm ? "body1" : "h5"}
        children="Use TypeScript or any other language with WebAssembly." />
      <Typography
        variant={sm ? "body1" : "h5"}
        children="Saurus uses Mutevents, a safe, typed, async event system." />
      <Box
        height="30vh"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Typography
          variant={sm ? "h5" : "h3"}
          children={<pre children={text} />} />
      </Box>
      <a target="_blank"
        href="https://github.com/saurusmc/create-saurus-plugin">
        <Fab
          color="primary"
          variant="extended"
          children={<BoldTypo children="Learn more" />} />
      </a>
    </Box>
  )
}
