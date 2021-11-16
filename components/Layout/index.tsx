import React from "react";
import Navbar from "./Navbar";
import { Container } from "@chakra-ui/react";
import Footer from "./Footer";
import { VStack } from "@chakra-ui/layout";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <VStack spacing="24px">
      <Navbar />
      <Container
        maxW="container.lg"
      >
        {children}
      </Container>
      <Footer/>
    </VStack>
  );
};

export default Layout;
