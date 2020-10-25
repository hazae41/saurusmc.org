import React, { CSSProperties, forwardRef } from "react";

import { Typography, TypographyProps } from "@material-ui/core";
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