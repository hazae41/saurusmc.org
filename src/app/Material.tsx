import React, { CSSProperties, forwardRef, RefObject } from "react";

import { Card, CardProps, Fab, Tooltip, TooltipProps, Typography, TypographyProps } from "@material-ui/core";
import type { Ref } from "./React";

export const BoldTypo = forwardRef((
  props: TypographyProps,
  ref: Ref<HTMLSpanElement>
) => {
  const { style, ...other } = props;

  const inject: CSSProperties = {
    fontWeight: "bold",
    ...style
  }

  return <Typography ref={ref} style={inject} {...other} />
})

export const RoundCard = forwardRef((
  props: CardProps & { radius?: string | number },
  ref: Ref<unknown>
) => {
  const { radius, style, ...other } = props;

  const inject: CSSProperties = {
    borderRadius: radius || 64,
    ...style
  }

  return <Card ref={ref} style={inject} {...other} />
})

export const FlatFab = forwardRef((props: any, ref: any) => {
  const { style, ...other } = props

  const inject: CSSProperties = {
    boxShadow: "none",
    ...style
  }

  return <Fab ref={ref} disableRipple style={inject} {...other} />
})

export const FastTooltip = forwardRef((
  props: TooltipProps,
  ref: Ref<unknown>
) => {
  return <Tooltip ref={ref}
    enterDelay={0}
    leaveDelay={0}
    TransitionProps={{ timeout: 0 }}
    {...props} />
})