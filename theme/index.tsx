import { extendTheme } from "@chakra-ui/react";
import { Box } from "./Components";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  components: {
    Box,
  },
});

export default theme;
