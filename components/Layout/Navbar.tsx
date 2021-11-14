import React from "react";
import { Flex, Spacer, Container, HStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import { Link as ExternalLink } from "@chakra-ui/layout";
import { Div, Text } from "../../atoms";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useStyleConfig } from "@chakra-ui/system";

const Navbar: React.FC<{}> = () => {
  const logoStyles = useStyleConfig("Box", { variant: "logo" });
  return (
    <Container maxW="container.xl">
      <Flex align="center" py={4}>
        <Link href="/">
          <Div __css={logoStyles}>
            <Text fontSize="lg" fontWeight={700} fontStyle="italic">
              NLA
            </Text>
          </Div>
        </Link>
        <Spacer />
        <HStack align="center">
          <ExternalLink href="https://github.com/naofalleoagusta" isExternal>
            <Icon w={9} h={9} as={FaGithub} />
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/naofal-leo-agusta/"
            isExternal
          >
            <Icon w={9} h={9} as={FaLinkedin} />
          </ExternalLink>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
