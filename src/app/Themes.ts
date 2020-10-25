import { createMuiTheme, Duration } from "@material-ui/core"
import type { Overrides } from "@material-ui/core/styles/overrides"
import type { ComponentsProps } from "@material-ui/core/styles/props"

const Pretty: ComponentsProps = {
  MuiButtonBase: { disableRipple: true },
  MuiTooltip: { interactive: true, enterTouchDelay: 0, leaveTouchDelay: 0 }
}

const Rounder: Overrides = {
  MuiPaper: {
    rounded: { borderRadius: 16 }
  }
}

export const Light = createMuiTheme({
  overrides: Rounder,
  props: Pretty,
  transitions: { create: () => 'none' },
  palette: { type: "light" },
})

export const Dark = createMuiTheme({
  overrides: Rounder,
  props: Pretty,
  transitions: { create: () => 'none' },
  palette: { type: "dark" },
})