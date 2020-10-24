import { createMuiTheme, Duration } from "@material-ui/core"
import type { Overrides } from "@material-ui/core/styles/overrides"

const Quick: Duration = {
  short: 0,
  shorter: 0,
  standard: 0,
  shortest: 0,
  complex: 0,
  enteringScreen: 0,
  leavingScreen: 0
}

const Rounder: Overrides = {
  MuiPaper: {
    rounded: { borderRadius: 16 }
  }
}

export const Light = createMuiTheme({
  overrides: Rounder,
  transitions: { duration: Quick },
  palette: { type: "light" },

})

export const Dark = createMuiTheme({
  overrides: Rounder,
  transitions: { duration: Quick },
  palette: {
    type: "dark",
    background: {
      default: "#000000"
    }
  },
})