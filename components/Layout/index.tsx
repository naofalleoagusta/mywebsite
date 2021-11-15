import React from "react";
import Navbar from "./Navbar";
import { Container } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container
        maxW="container.lg"
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
