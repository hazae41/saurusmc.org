import { createMuiTheme } from "@material-ui/core"

export const Light = createMuiTheme({
  palette: { type: "light" }
})

export const Dark = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#000000"
    }
  }
})