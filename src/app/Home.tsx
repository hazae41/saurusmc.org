import React, { useState, useEffect, useRef } from 'react';

import { Avatar, Box, createMuiTheme, CssBaseline, Fab, ThemeProvider, Tooltip, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { Dark, Light } from './Themes';

import github from "../assets/github.png"
import discord from "../assets/discord.png"
import patreon from "../assets/patreon.png"

import { BoldTypo } from './Material';
import type { Openable, Ref } from './React';
import { PluginsDialog } from './Plugins';

export const Bar = () => (
  <Box
    width="100%"
    maxWidth={2000}
    display="flex"
    padding={2}>
    <BoldTypo
      variant="h3"
      color="textPrimary"
      children="Saurus" />
    <Box flex={1} />
    <Tooltip arrow title="Discord">
      <a target="_blank"
        href="https://discord.gg/HNgMKvV">
        <Fab
          color="inherit"
          size="medium"
          children={<Avatar src={discord} />} />
      </a>
    </Tooltip>
    <Box width={8} />
    <Tooltip arrow title="GitHub">
      <a target="_blank"
        href="https://github.com/saurusmc/create-saurus">
        <Fab
          color="inherit"
          size="medium"
          children={<Avatar src={github} />} />
      </a>
    </Tooltip>
    <Box width={8} />
    <Tooltip arrow title="Patreon">
      <a target="_blank"
        href="https://patreon.com/hazae41">
        <Fab
          color="inherit"
          size="medium"
          children={<Avatar src={patreon} />} />
      </a>
    </Tooltip>
  </Box>
)

export const Texts = () => {
  const { breakpoints } = useTheme();
  const sm = useMediaQuery(breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      padding={2}>
      <BoldTypo
        variant={sm ? "h3" : "h1"}
        color="textPrimary"
        children="Less plugins, more Minecraft." />
      <Typography
        variant={sm ? "h6" : "h5"}
        color="textPrimary"
        children="Get the best Minecraft experience, mixing plugins and third-party apps for your players." />
      <Typography
        variant={sm ? "h6" : "h5"}
        color="textPrimary"
        children="Connect your servers without proxy, and use secure apps to manage them remotely." />
    </Box>
  )
}
export const ServersButton = () => (
  <Tooltip arrow
    title="Coming soon!">
    <Box>
      <Fab
        disabled
        variant="extended"
        children={<BoldTypo children="Try Saurus" />} />
    </Box>
  </Tooltip>
)

export const PluginsButton = () => {
  const dialog = useRef<Openable>(null)

  return (<>
    <ThemeProvider theme={Light}>
      <PluginsDialog
        ref={dialog} />
    </ThemeProvider>
    <Fab
      variant="extended"
      onClick={() => dialog.current?.open()}
      children={<BoldTypo children="Get Plugins" />} />
  </>)
}

export const Buttons = () => (
  <Box display="flex">
    <ServersButton />
    <Box width={16} />
    <PluginsButton />
  </Box>
)

export const Display = () => (
  <Box
    flex={1}
    display="flex"
    flexDirection="column"
    justifyContent="space-around"
    alignItems="center">
    <Texts />
    <Buttons />
  </Box>
)

export const Home = () => {
  return (
    <ThemeProvider theme={Dark}>
      <Box
        className="background"
        minHeight="90vh">
        <Box
          className="blurred"
          minHeight="90vh"
          display="flex"
          alignItems="center"
          flexDirection="column">
          <Bar />
          <Display />
        </Box>
      </Box>
    </ThemeProvider>
  )
}