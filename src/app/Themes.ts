import { createMuiTheme, Duration } from "@material-ui/core"
import { cyan, grey, pink, yellow } from "@material-ui/core/colors"
import type { Overrides } from "@material-ui/core/styles/overrides"
import type { ComponentsProps } from "@material-ui/core/styles/props"

const Pretty: ComponentsProps = {
  MuiButtonBase: {
    disableRipple: true
  },
  MuiTooltip: {
    interactive: true,
    enterTouchDelay: 0,
    leaveTouchDelay: 0,
    enterDelay: 0,
    leaveDelay: 0,
  }
}

const Rounder: Overrides = {
  MuiButtonBase: {
    root: { boxShadow: "none !important" }
  },
  MuiPaper: {
    rounded: { borderRadius: 16 }
  },
  MuiFab: {
    colorInherit: { background: "white" }
  }
}

export const Light = createMuiTheme({
  overrides: Rounder,
  props: Pretty,
  transitions: { create: () => 'none' },
  palette: {
    type: "light",
    primary: yellow,
    background: {
      paper: "#ffffff",
      default: "#ffffff"
    }
  },
})

export const Dark = createMuiTheme({
  overrides: Rounder,
  props: Pretty,
  transitions: { create: () => 'none' },
  palette: {
    type: "dark",
    primary: yellow,
    background: {
      paper: "#000000",
      default: "#000000"
    }
  },
})