import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Box } from "./Components";
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    p: 0,
    m: 0,
    bgColor: "black",
  },
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  components: {
    Box,
  },
});

export default theme;
