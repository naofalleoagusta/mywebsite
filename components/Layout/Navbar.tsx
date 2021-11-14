import React from "react";
import { Flex, Spacer, Container, HStack, Box } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import { Link as ExternalLink } from "@chakra-ui/layout";
import { Div, Text } from "../../atoms";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
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
        <HStack>
          <ExternalLink href="https://github.com/naofalleoagusta" isExternal>
            <Icon boxSize={10} as={FaGithub} />
          </ExternalLink>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
