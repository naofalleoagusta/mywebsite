import { Box, BoxProps } from "@chakra-ui/layout";
import { forwardRef } from "react";

const Div = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box {...props} {...({ ref } as any)}>
        {children}
      </Box>
    );
  }
);

export type { BoxProps };
export default Div;
