import React from "react";
import { Container } from "@chakra-ui/layout";
import { Link as ExternalLink } from "@chakra-ui/layout";
import { Text } from "../../atoms";

const Footer: React.FC<{}> = () => {
  return (
    <Container maxW="container.xl" position="sticky" pt={10} pb={5}>
      <Text fontSize="md" fontWeight={400}>
        Made with ❤️ on{" "}
        <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink> and{" "}
        <ExternalLink href="https://chakra-ui.com/">Chakra UI</ExternalLink>
      </Text>
    </Container>
  );
};

export default Footer;
