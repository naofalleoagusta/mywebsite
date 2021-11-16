import React from "react";
import Fade from "react-reveal/Fade";
import { HStack, Grid, GridItem, Box, VStack } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import { Text } from "../../atoms";
import { useStyleConfig } from "@chakra-ui/system";

interface ToolsProps {
  name: string;
  img: string;
  skill: number;
}

interface SkillProps {
  skills: ToolsProps[];
}

const SkillsList: React.FC<SkillProps> = ({ skills }) => {
  const cardStyle = useStyleConfig("Box", { variant: "card" });
  return (
    <Fade left cascade>
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={2}
        alignItems="center"
        w="100%"
      >
        {skills.map((item, idx) => {
          return (
            <GridItem
              colSpan={{ base: 12, md: 4 }}
              display="flex"
              my={2}
              p={2}
              alignItems="center"
              justifyContent={{ base: "center", md: "left" }}
              h="100%"
              key={`grid-${item.name}-${idx}`}
            >
              <Img src={item.img} alt={`logo ${item.name}`} w="72px" h="auto" />
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
  );
};

export default SkillsList;
