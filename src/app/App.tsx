import React, { useState, useEffect, useCallback, CSSProperties } from 'react';

import { Avatar, Box, Button, Card, CardActionArea, createMuiTheme, CssBaseline, Fab, MuiThemeProvider, ThemeProvider, Tooltip, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { Dark, Light } from './Themes';

import { Home } from './Home';
import { BoldTypo } from './Material';
import { useTyper } from './Typer';

export const App = () => {

  return (<>
    <CssBaseline />
    <ThemeProvider theme={Dark}>
      <Home />
    </ThemeProvider>
    <ThemeProvider theme={Light}>
      <Presentation1 />
    </ThemeProvider>
    <ThemeProvider theme={Dark}>
      <Presentation2 />
    </ThemeProvider>
  </>)
}


export const Text1 = `
player.on(["death"], () => {
  console.log("Player is dead!")
})
`

export const Presentation1 = () => {
  const { breakpoints } = useTheme();
  const sm = useMediaQuery(breakpoints.down('sm'));
  const text = useTyper(Text1)

  return (
    <Box
      minHeight="90vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={2}>
      <BoldTypo
        variant={sm ? "h4" : "h2"}
        children="Create plugins, quickly." />
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
          children={<BoldTypo children="Get started" />} />
      </a>
    </Box>
  )
}

export const Presentation2 = () => {
  const { breakpoints } = useTheme();
  const sm = useMediaQuery(breakpoints.down('sm'));
  const text1 = useTyper("wss://myserver.xyz:8443")

  const appIconSize = sm ? 64 : 128

  return (
    <Box
      minHeight="90vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="background.default"
      padding={2}>
      <BoldTypo
        color="textPrimary"
        variant={sm ? "h4" : "h2"}
        children="Create apps, securely." />
      <Typography
        color="textPrimary"
        variant={sm ? "body1" : "h5"}
        children="Forget about chest UIs and commands, your players deserve better." />
      <Typography
        color="textPrimary"
        variant={sm ? "body1" : "h5"}
        children="Use apps with WebSockets over HTTPS, with strict player authentication." />
      <Box
        height="20vh"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Typography
          color="textPrimary"
          variant={sm ? "h5" : "h3"}
          children={<pre children={text1} />} />
      </Box>
      <Box
        display="grid"
        width="100%"
        maxWidth={1200}
        overflow="auto"
        gridGap={sm ? 16 : 32}
        gridTemplateColumns={
          `repeat(auto-fit, minmax(${appIconSize}px, 1fr))`
        }>
        <AppIcon
          size={appIconSize}
          name="Steve"
          url="https://pinger.netlify.app/"
          icon="https://pinger.netlify.app/favicon.png" />
        <AppIcon
          size={appIconSize}
          name="Hazae41"
          url="https://pinger.netlify.app/"
          icon="https://crafatar.com/avatars/9d39e41a069942a1bdd2fc4f747acc72" />
        <AppIcon
          size={appIconSize}
          name="Notch"
          url="https://pinger.netlify.app/"
          icon="https://crafatar.com/avatars/069a79f444e94726a5befca90e38aaf5" />
        <AppIcon
          size={appIconSize}
          name="md_5"
          url="https://pinger.netlify.app/"
          icon="https://crafatar.com/avatars/af74a02d19cb445bb07f6866a861f783" />
      </Box>
    </Box>
  )
}

export const AppIcon = (props: {
  name: string
  url: string
  icon: string
  size: number
}) => {
  const { name, url, icon, size } = props;

  const avatarStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: 16
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <CardActionArea
        style={{ width: size }}
        target="_blank"
        href={url}>
        <Avatar
          variant="square"
          style={avatarStyle}
          src={icon} />
      </CardActionArea>
      <Box height={8} />
      <BoldTypo
        color="textPrimary"
        children={name} />
    </Box >
  )
}
