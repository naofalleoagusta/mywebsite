import React from "react";
import { Flex, Spacer, Container, Box } from "@chakra-ui/layout";

const Navbar: React.FC<{}> = () => {
  return (
    <Container maxW="container.xl">
      <Flex align="center">
        <Box px={4} py={2} color="white" bg="black">NLA</Box>
        <Spacer />
        <div>
          <span>test</span>
          <span>test</span>
          <span>test</span>
        </div>
        <Spacer />
        <div>test</div>
      </Flex>
    </Container>
  );
};

export default Navbar;
