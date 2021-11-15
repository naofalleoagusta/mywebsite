import { Img } from "@chakra-ui/react";
import { Text, Div } from "../atoms";
import Layout from "../components/Layout";
import Fade from "react-reveal/Fade";
import { HStack, Grid, GridItem } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";

const Home: React.FC<{}> = () => {
  return (
    <Layout>
      <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems="center">
        <GridItem
          colSpan={{ base: 12, md: 8, lg: 9 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Fade top>
            <Div>
              <HStack justifyContent={{base:"center",md:"unset"}}>
                <Text fontSize="5xl" fontWeight="600" as="span">
                  Hello
                </Text>
                <Img
                  boxSize="72px"
                  src="https://c.tenor.com/nebZyl8oN7IAAAAi/wave-hello.gif"
                  alt="waving gif"
                  htmlHeight="72px"
                  htmlWidth="72px"
                />
              </HStack>
              <Text fontSize="5xl" fontWeight="600" as="h1">
                I'm Naofal
              </Text>
              <Text fontSize="5xl" fontWeight="700" as="span">
                and I am a{" "}
              </Text>
              <Text
                fontSize="5xl"
                bgClip="text"
                fontWeight="700"
                bgGradient="linear-gradient(90deg, rgba(244,94,94,1) 0%, rgba(205,0,104,1) 29%, rgba(0,212,255,1) 100%)"
                as="span"
              >
                Software Engineer
              </Text>
            </Div>
          </Fade>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4, lg: 3 }} justifyContent="center">
          <Tooltip label="That is me!">
            <Img
              src="https://ik.imagekit.io/tne8tyuws/DSC_3116_UsOtpoegW.jpg?updatedAt=1636940731327"
              alt="naofal's close up photo"
              borderRadius="100%"
              w={{ base: "50%", md: "100%" }}
              h={{ base: "50%", md: "100%" }}
            />
          </Tooltip>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Home;
