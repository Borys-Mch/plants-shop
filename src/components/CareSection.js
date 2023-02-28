import React from "react";
import Image from "next/image";
import { Box, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { careItem } from "@/constants";

const CareSection = () => {
  return (
    <Center>
      <Container maxW="container.2xl" my={44}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={10}>
          <Box>
            <Heading fontSize={64} fontWeight={500}>
              How to care <br />
              for plants
            </Heading>
            <Text fontSize={20} pt={7}>
              Take care of plants with all your heart
            </Text>
            <Box mt={20} maxW="585px">
              {careItem.map((item) => (
                <Stack key={item.id} direction="row" mt={8}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={68}
                    height={68}
                  />
                  <Box pl={6}>
                    <Text fontSize={32} fontWeight={500}>
                      {item.title}
                    </Text>
                    <Text fontSize={20}>{item.desc}</Text>
                  </Box>
                </Stack>
              ))}
            </Box>
          </Box>
          <Box
            position="relative"
            w={{ base: 350, sm: 450, lg: 657 }}
            h={{ base: 329, sm: 423, lg: 618 }}>
            <Image
              src="https://res.cloudinary.com/dfsqwbmsa/image/upload/v1677514857/plants/care_lhddob.png"
              fill
              alt="Care"
            />
          </Box>
        </Stack>
      </Container>
    </Center>
  );
};

export default CareSection;
