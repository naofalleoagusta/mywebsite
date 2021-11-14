import { Text as SText, TextProps } from "@chakra-ui/layout";
import { forwardRef } from "react";

const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ children, ...props }, ref) => {
    return (
      <SText {...props} {...({ ref } as any)}>
        {children}
      </SText>
    );
  }
);

export type { TextProps };
export default Text;
