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
      bg: "black",
      _hover: {
        background: "white",
        color: "black",
        cursor: "pointer",
      },
      transition: "0.5s",
    },
    section: {
      bg: "transparent",
      color: "black",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "lg",
    variant: "section",
  },
};

export default Box;
