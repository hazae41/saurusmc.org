import { Avatar, Box, Card, CardActionArea, Dialog, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, useMediaQuery, useTheme } from "@material-ui/core"
import { AddOutlined, CloseOutlined, FavoriteOutlined } from "@material-ui/icons"
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react"
import { BoldTypo, FastTooltip } from "./Material"
import type { Openable, Ref, State } from "./React"

import favicon from "../assets/favicon.png"

export interface Plugin {
  name: string,
  description: string
  html_url: string
}

namespace Plugins {
  export interface Repository {
    name: string
    description: string,
    html_url: string
  }

  export async function list(signal: AbortSignal) {
    const url =
      "https://api.github.com/orgs/saurusmc-plugins/repos"
    const res = await fetch(url, { signal })
    return await res.json()
  }
}

export const PluginsDialog = forwardRef((
  props: {},
  ref: Ref<Openable>
) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [opened, setOpened] = useState(false)
  const open = useCallback(() => setOpened(true), [])
  const close = useCallback(() => setOpened(false), [])

  useImperativeHandle(ref, () => {
    return { open, close }
  })

  const [plugins, setPlugins] = useState<Plugin[]>([])

  useEffect(() => {
    const aborter = new AbortController()
    Plugins.list(aborter.signal).then(setPlugins)
    return () => aborter.abort()
  }, [])

  const $search = useState("")
  const [search, setSearch] = $search

  const searched = useMemo(() => {
    return plugins.filter(it => {
      const name = it.name.includes(search)
      const desc = it.description.includes(search)
      return name || desc
    })
  }, [plugins, search])

  return (
    <Dialog
      fullWidth
      open={opened}
      onClose={close}
      scroll="body"
      fullScreen={fullScreen}
      transitionDuration={0}>
      <Box
        minHeight="90vh"
        padding={2}>
        <Box
          display="flex"
          alignItems="center">
          <BoldTypo
            variant="h4"
            children="Plugins" />
          <Box flex={1} />
          <IconButton
            onClick={close}
            disableRipple
            color="inherit"
            children={<CloseOutlined />} />
        </Box>
        <Box height={16} />
        <Search
          $search={$search} />
        <PluginsList
          plugins={searched} />
      </Box>
    </Dialog>
  )
})

export const Search = (props: {
  $search: State<string>
}) => {
  const { $search } = props
  const [search, setSearch] = $search

  return (
    <Card variant="outlined">
      <Box
        padding={1}
        display="flex">
        <InputBase fullWidth
          value={search}
          style={{ fontWeight: "bold" }}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for plugins" />
        <IconButton
          size="small"
          disableRipple
          color="inherit"
          disabled={!search}
          onClick={() => setSearch("")}
          children={<CloseOutlined />} />
      </Box>
    </Card>
  )
}

export const PluginsList = (props: {
  plugins: Plugin[]
}) => {
  const { plugins } = props;

  if (!plugins.length) {
    return (
      <Box
        padding={2}
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <BoldTypo
          variant="h5"
          children="No plugin found" />
      </Box>
    )
  }

  return (
    <List>
      {plugins.map(it => (
        <Plugin
          key={it.name}
          plugin={it} />
      ))}
    </List>
  )
}

export const Plugin = (props: {
  plugin: Plugin
}) => {
  const { plugin } = props

  return (<>
    <Card variant="outlined">
      <CardActionArea
        disableRipple
        href={plugin.html_url}
        target="_blank">
        <ListItem>
          <ListItemAvatar>
            <FastTooltip arrow title="SaurusMC">
              <Avatar src={favicon} />
            </FastTooltip>
          </ListItemAvatar>
          <ListItemText
            secondary={plugin.description}>
            <BoldTypo
              variant="h6"
              children={plugin.name} />
          </ListItemText>
        </ListItem>
      </CardActionArea>
    </Card>
    <Box height={8} />
  </>)
}