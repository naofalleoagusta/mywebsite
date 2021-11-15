import { extendTheme } from "@chakra-ui/react";
import { Box } from "./Components";

const theme = extendTheme({
  html:{
    scrollBehavior: "smooth"
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
