import { Avatar, Box, Card, CardActionArea, Chip, Dialog, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Tooltip, useMediaQuery, useTheme } from "@material-ui/core"
import { AddOutlined, CloseOutlined, FavoriteOutlined } from "@material-ui/icons"
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react"
import { BoldTypo } from "./Material"
import type { Openable, Ref, State } from "./React"

import favicon from "../assets/favicon.png"

export interface Plugin {
  name: string,
  description: string
  repository: string
  topics: string[]
}

namespace Plugins {
  export interface Repository {
    name: string
    description: string,
    url: string
    html_url: string,
    tags_url: string
  }

  export async function list(signal: AbortSignal) {
    const url =
      "https://api.github.com/orgs/saurusmc-plugins/repos"
    const res = await fetch(url, { signal })
    return await res.json() as Repository[]
  }

  export async function topics(repo: Repository, signal: AbortSignal) {
    const headers = new Headers({ "Accept": "application/vnd.github.mercy-preview+json" })
    const res = await fetch(repo.url + "/topics", { signal, headers })
    return (await res.json() as { names: string[] }).names
  }
}

export const PluginsDialog = forwardRef((
  props: {},
  ref: Ref<Openable>
) => {
  const { breakpoints } = useTheme();
  const sm = useMediaQuery(breakpoints.down('sm'));

  const [opened, setOpened] = useState(false)
  const open = useCallback(() => setOpened(true), [])
  const close = useCallback(() => setOpened(false), [])

  useImperativeHandle(ref, () => {
    return { open, close }
  })

  const [plugins, setPlugins] = useState<Plugin[]>([])

  useEffect(() => {
    const aborter = new AbortController()
    getPlugins(aborter.signal).then(setPlugins)
    return () => aborter.abort()
  }, [])

  async function getPlugins(signal: AbortSignal) {
    const repos = await Plugins.list(signal)

    const plugins = repos.map(async repo => {
      const { name, description, html_url } = repo
      const repository = html_url
      const topics = await Plugins.topics(repo, signal)
      return { name, description, repository, topics }
    })

    return await Promise.all(plugins)
  }

  const $search = useState("")
  const [search, setSearch] = $search

  const searched = useMemo(() => {
    const keywords = search
      .toLowerCase()
      .split(" ")
      .filter(it => it)
    return plugins.filter(it => {
      return keywords.every(keyword => {
        const name = it.name
          .toLowerCase()
          .includes(keyword)
        const desc = it.description
          .toLowerCase()
          .includes(keyword)
        const topics = it.topics
          .find(it => it.includes(keyword))
        return name || desc || topics
      })
    })
  }, [plugins, search])

  return (
    <Dialog
      fullWidth
      open={opened}
      onClose={close}
      scroll="body"
      fullScreen={sm}>
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
            color="inherit"
            children={<CloseOutlined />} />
        </Box>
        <Box height={16} />
        <Search
          $search={$search} />
        <PluginsList
          $search={$search}
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
        paddingY={1}
        paddingX={2}
        display="flex">
        <InputBase fullWidth
          value={search}
          style={{ fontWeight: "bold" }}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for plugins" />
        <IconButton
          size="small"
          color="inherit"
          disabled={!search}
          onClick={() => setSearch("")}
          children={<CloseOutlined />} />
      </Box>
    </Card>
  )
}

export const PluginsList = (props: {
  $search: State<string>
  plugins: Plugin[]
}) => {
  const { plugins, $search } = props;

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
          $search={$search}
          key={it.name}
          plugin={it} />
      ))}
    </List>
  )
}

export const Plugin = (props: {
  $search: State<string>
  plugin: Plugin
}) => {
  const { plugin, $search } = props
  const [search, setSearch] = $search

  const append = (topic: string) => () => {
    const keywords = search.split(" ")
      .filter(it => it)
    keywords.push(topic)
    setSearch(keywords.join(" "))
  }

  return (<>
    <Card variant="outlined">
      <CardActionArea
        href={plugin.repository}
        target="_blank">
        <ListItem>
          <ListItemAvatar>
            <a target="_blank"
              href="https://github.com/saurusmc">
              <Tooltip arrow title="SaurusMC">
                <Avatar src={favicon} />
              </Tooltip>
            </a>
          </ListItemAvatar>
          <ListItemText
            secondary={plugin.description}>
            <BoldTypo
              variant="h6"
              children={plugin.name} />
          </ListItemText>
        </ListItem>
      </CardActionArea>
      {plugin.topics.length > 0 && (
        <Box
          padding={1}
          display="flex">
          {plugin.topics.map(topic => (<>
            <Chip
              label={topic}
              variant="outlined"
              style={{ fontWeight: "bold" }}
              onClick={append(topic)} />
            <Box width={4} />
          </>))}
        </Box>
      )}
    </Card>
    <Box height={8} />
  </>)
}