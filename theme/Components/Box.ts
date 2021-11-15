const Box = {
  // The styles all button have in common
  // Two sizes: sm and md
  sizes: {
    md: {
      fontSize: "sm",
      px: 3, // <-- px is short for paddingLeft and paddingRight
      py: 1, // <-- py is short for paddingTop and paddingBottom
    },
    lg: {
      fontSize: "md",
      px: 3, // <-- these values are tokens from the design system
      py: 1, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    logo: {
      color: "white",
      bg: "linear-gradient(90deg, rgba(244,94,94,1) 0%, rgba(205,0,104,1) 29%, rgba(0,212,255,1) 100%)",
      _hover: {
        background: "white",
        color: "black",
        cursor: "pointer",
      },
      transition: "0.5s",
    },
    section: {
      d: "flex",
      justify: "center",
      align: "center",
      w: "100%",
      h: "100vh",
      minH:"100vh"
    },
    sectionOne: {
      d: "flex",
      justify: "center",
      align: "center",
      w: "100%",
      h: "91vh",
      minH:"91vh"
    },
    container: {
      d: "flex",
      flexDir: "column",
      position: "absolute",
      overflow: "auto",
      top: 0,
      left: 0,
      w: "100%",
      h: "100%",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "lg",
    variant: "section",
  },
};

export default Box;
