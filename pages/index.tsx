import { Img } from "@chakra-ui/react";
import { Text, Div } from "../atoms";
import Layout from "../components/Layout";
import Fade from "react-reveal/Fade";
import { HStack, Grid, GridItem, Box, VStack } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { useStyleConfig } from "@chakra-ui/system";
import language from "../constant/language";
import Slide from "react-reveal/Slide";

const Home: React.FC<{}> = () => {
  const sectionStyle = useStyleConfig("Box", { variant: "section" });
  const sectionOneStyle = useStyleConfig("Box", { variant: "sectionOne" });

  return (
    <Layout>
      <Div __css={sectionOneStyle}>
        <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems="center">
          <GridItem
            colSpan={{ base: 12, md: 8, lg: 9 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Fade top>
              <Div>
                <HStack justifyContent={{ base: "center", md: "unset" }}>
                  <Text
                    fontSize={{ base: "4xl", md: "5xl" }}
                    fontWeight="600"
                    as="span"
                  >
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
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="600"
                  as="h1"
                >
                  I'm Naofal
                </Text>
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="700"
                  as="span"
                >
                  and I am a{" "}
                </Text>
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
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
          <GridItem
            colSpan={{ base: 12, md: 4, lg: 3 }}
            justifyContent="center"
            display="flex"
          >
            <Tooltip label="That's me!">
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
      </Div>
      <Div __css={sectionStyle} justifyContent="center" alignItems="center">
        <VStack spacing="24px" textAlign="center">
          <Fade bottom cascade>
            <Text
              fontSize={{ base: "4xl", md: "5xl" }}
              bgClip="text"
              fontWeight="700"
              bgGradient="linear-gradient(90deg, rgba(244,94,94,1) 0%, rgba(205,0,104,1) 29%, rgba(0,212,255,1) 100%)"
              as="h2"
            >
              About Me
            </Text>
            <Text fontSize="xl" fontWeight="400">
              Greetings! My name is Naofal Leo Agusta, currently I live in
              Bandung, Indonesia. I am a passionate software engineer with 2
              years of experience in tech industry. I like alot of stuff such as
              music, sports, and gaming. On my free time I usually play Dota 2
              or binge some series on Netflix.
            </Text>
          </Fade>

          <Fade bottom cascade>
            <Text
              fontSize={{ base: "4xl", md: "5xl" }}
              bgClip="text"
              fontWeight="700"
              bgGradient="linear-gradient(90deg, rgba(244,94,94,1) 0%, rgba(205,0,104,1) 29%, rgba(0,212,255,1) 100%)"
              as="h2"
            >
              Programming Language
            </Text>

            <Text fontSize="xl" fontWeight="400">
              I'm pretty comfortable developing an app using these programming
              languanges:
            </Text>
          </Fade>
          <Fade left cascade>
            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={2}
              alignItems="center"
              w="100%"
            >
              {language.map((item, idx) => {
                return (
                  <GridItem
                    colSpan={{ base: 12, md: 4 }}
                    display="flex"
                    my={2}
                    px={2}
                    alignItems="center"
                    justifyContent={{ base: "center", md: "left" }}
                    key={`grid-${item.name}-${idx}`}
                  >
                    <Img
                      src={item.img}
                      alt={`logo ${item.name}`}
                      w="72px"
                      h="auto"
                    />
                    <VStack ml="1rem" alignItems="center">
                      <Text fontSize="xl" fontWeight="900" as="p">
                        {item.name}
                      </Text>
                      <HStack spacing="8px">
                        {[1, 2, 3, 4, 5].map((number) => {
                          if (number <= item.skill) {
                            return (
                              <Box
                                w="20px"
                                h="20px"
                                bg="gray.700"
                                key={`skill-${item.name}-${number}`}
                              />
                            );
                          } else {
                            return (
                              <Box
                                w="20px"
                                h="20px"
                                bg="gray.300"
                                key={`skill-${item.name}-${number}`}
                              />
                            );
                          }
                        })}
                      </HStack>
                    </VStack>
                  </GridItem>
                );
              })}
            </Grid>
          </Fade>
        </VStack>
      </Div>
    </Layout>
  );
};

export default Home;
