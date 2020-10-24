import React, { useState, useEffect } from 'react';

import { Avatar, Box, createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core"
import { Dark, Light } from './Themes';

import github from "../assets/github.png"
import discord from "../assets/discord.png"
import patreon from "../assets/patreon.png"

import { BoldTypo, FastTooltip, FlatFab } from './Material';

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
    <FastTooltip arrow title="Discord">
      <FlatFab
        size="medium"
        href="https://discord.gg/HNgMKvV"
        target="_blank"
        children={<Avatar src={discord} />} />
    </FastTooltip>
    <Box width={8} />
    <FastTooltip arrow title="GitHub">
      <FlatFab
        size="medium"
        href="https://github.com/saurusmc"
        target="_blank"
        children={<Avatar src={github} />} />
    </FastTooltip>
    <Box width={8} />
    <FastTooltip arrow title="Patreon">
      <FlatFab
        size="medium"
        href="https://patreon.com/hazae41"
        target="_blank"
        children={<Avatar src={patreon} />} />
    </FastTooltip>
  </Box>
)

export const Texts = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    padding={2}>
    <BoldTypo
      variant="h2"
      color="textPrimary"
      children="Less plugins, more Minecraft." />
    <BoldTypo
      color="textPrimary"
      children="Get the best Minecraft experience, mixing plugins and third-party apps for your players." />
    <BoldTypo
      color="textPrimary"
      children="Connect your servers without proxy, and use secure apps to manage them remotely." />
  </Box>
)

export const ServersButton = () => (
  <FastTooltip arrow
    title="Coming soon!">
    <Box>
      <FlatFab
        disabled
        variant="extended"
        children={<BoldTypo children="Try Saurus" />} />
    </Box>
  </FastTooltip>
)

export const PluginsButton = () => (
  <FastTooltip arrow
    title="Coming soon!">
    <Box>
      <FlatFab
        disabled
        variant="extended"
        children={<BoldTypo children="Get Plugins" />} />
    </Box>
  </FastTooltip>
)

export const Buttons = () => {
  return (
    <Box display="flex">
      <ServersButton />
      <Box width={16} />
      <PluginsButton />
    </Box>
  )
}

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
        minHeight="100vh">
        <Box
          className="blurred"
          minHeight="100vh"
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