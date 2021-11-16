import React from "react";
import Fade from "react-reveal/Fade";
import {  Grid, GridItem, VStack } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import { Text } from "../../atoms";

interface ExperienceProps {
    name: string;
    duration: string;
    role: string;
    logo: string;
  }

interface SkillProps {
  experience: ExperienceProps[];
}

const ExperienceList: React.FC<SkillProps> = ({ experience }) => {
  return (
    <Fade left cascade>
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={2}
        alignItems="center"
        w="100%"
      >
        {experience.map((item, idx) => {
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
              <Img src={item.logo} alt={`logo ${item.name}`} w="72px" h="auto" />
              <VStack ml="1rem" spacing="1px" alignItems="center">
                <Text fontSize="xl" fontWeight="900" as="p">
                  {item.name}
                </Text>
                <Text fontSize="lg" as="p">
                  {item.role}
                </Text>
                <Text fontSize="md" as="p">
                  {item.duration}
                </Text>
              </VStack>
            </GridItem>
          );
        })}
      </Grid>
    </Fade>
  );
};

export default ExperienceList;
